// DOM Elements
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');

// Check if we are on the index page
if (bookGrid) {
    initializeLibrary();
}

// Check if we are on the book reader page
if (document.getElementById('pdf-container')) {
    initializeReader();
}

/**
 * Initialize Library Page (Index)
 */
function initializeLibrary() {
    let currentBooks = [...catalog];

    // Initial Render
    renderBooks(currentBooks);

    // Search Event Listener
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = catalog.filter(book =>
            book.title.toLowerCase().includes(query)
        );
        renderBooks(filtered);
    });

    // Sort Event Listener
    sortSelect.addEventListener('change', (e) => {
        const fullList = searchInput.value ?
            catalog.filter(b => b.title.toLowerCase().includes(searchInput.value.toLowerCase())) :
            [...catalog];

        sortBooks(fullList, e.target.value);
        renderBooks(fullList);
    });
}

function renderBooks(books) {
    bookGrid.innerHTML = '';

    if (books.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.onclick = () => window.location.href = `book.html?book=${encodeURIComponent(book.filename)}`;

        // Use placeholder if cover is missing, or lazy load real cover
        const coverSrc = book.cover ? book.cover : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPk5vIENvdmVyPC90ZXh0Pjwvc3ZnPg==';

        card.innerHTML = `
            <img src="${coverSrc}" alt="${book.title}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-category">${book.category || 'عام'}</div>
                <div class="card-footer">
                    <span><ion-icon name="book-outline"></ion-icon> PDF</span>
                    <span><ion-icon name="download-outline"></ion-icon> تحميل</span>
                </div>
            </div>
        `;
        bookGrid.appendChild(card);
    });
}

function sortBooks(books, sortMethod) {
    switch (sortMethod) {
        case 'newest':
            books.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
            break;
        case 'oldest':
            books.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
            break;
        case 'az':
            books.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
            break;
        case 'za':
            books.sort((a, b) => b.title.localeCompare(a.title, 'ar'));
            break;
    }
}

/**
 * Initialize PDF Reader Page
 */
function initializeReader() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookFilename = urlParams.get('book');

    if (!bookFilename) {
        alert('لم يتم تحديد كتاب!');
        window.location.href = 'index.html';
        return;
    }

    // Find book metadata for title
    const bookData = catalog.find(b => b.filename === bookFilename);
    if (bookData) {
        document.getElementById('bookTitle').textContent = bookData.title;
    } else {
        document.getElementById('bookTitle').textContent = bookFilename.replace('.pdf', '');
    }

    // Setup Download Link - ALWAYS works
    const downloadBtn = document.getElementById('downloadBtn');
    const bookUrl = `books/${bookFilename}`;
    downloadBtn.href = bookUrl;

    const viewer = document.getElementById('viewer');
    const pdfContainer = document.getElementById('pdf-container');
    const toolbar = document.querySelector('.toolbar');

    // ===== DETECTION: file:// protocol vs hosted =====
    const isLocalFile = window.location.protocol === 'file:';

    if (isLocalFile) {
        // ===== LOCAL FILE MODE: Use iframe =====
        console.log('Running in local file mode. Using iframe viewer.');

        // Hide the PDF.js toolbar since iframe has its own controls
        if (toolbar) toolbar.style.display = 'none';


        // Show informational message and Object (standard PDF embed)
        pdfContainer.innerHTML = `
            <div style="padding: 15px; background: #fff3cd; border-radius: 8px; margin-bottom: 15px; direction: rtl; text-align: center;">
                <ion-icon name="information-circle-outline" style="font-size: 1.5rem; color: #856404; vertical-align: middle;"></ion-icon>
                <span style="color: #856404; margin-right: 8px;">
                    <strong>وضع الملفات المحلية:</strong> يتم استخدام عارض النظام.
                    للحصول على العارض المتقدم (PDF.js)، يرجى استخدام <strong>Live Server</strong>.
                </span>
            </div>
            
            <object 
                data="${bookUrl}" 
                type="application/pdf" 
                width="100%" 
                height="100%" 
                style="height: calc(100vh - 250px); border-radius: 8px; border: 1px solid #ddd; background: #525659;"
            >
                <!-- Fallback content if the browser cannot render the PDF -->
                <div style="text-align: center; padding: 50px; color: #333;">
                    <ion-icon name="document-text-outline" style="font-size: 4rem; color: #ccc;"></ion-icon>
                    <h3>لا يمكن عرض الملف مباشرة في هذا المتصفح</h3>
                    <p>المتصفح يمنع عرض ملفات PDF المحلية لأسباب أمنية.</p>
                    <a href="${downloadOnlyUrl}" target="_blank" class="download-btn" style="background-color: var(--primary-color); margin-top: 15px; display: inline-flex;">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                        تحميل / فتح الكتاب خارجياً
                    </a>
                </div>
            </object>
        `;

    } else {
        // ===== HOSTED MODE: Use PDF.js =====
        console.log('Running in hosted mode. Using PDF.js viewer.');

        let pdfDoc = null;
        let pageNum = 1;
        let pageRendering = false;
        let pageNumPending = null;
        let scale = 1.2;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        viewer.appendChild(canvas);

        const encodedBookUrl = 'books/' + encodeURIComponent(bookFilename);

        const loadingTask = pdfjsLib.getDocument(encodedBookUrl);

        loadingTask.promise.then(function (pdfDoc_) {
            pdfDoc = pdfDoc_;
            document.getElementById('pageCount').textContent = pdfDoc.numPages;
            renderPage(pageNum);
        }).catch(err => {
            console.error('Error loading PDF:', err);
            viewer.innerHTML = `<div style="padding:20px; text-align:center; color:white;">
                <h3>عذراً، حدث خطأ أثناء تحميل الملف.</h3>
                <p>يرجى التأكد من أن الملف موجود.</p>
            </div>`;
        });

        function renderPage(num) {
            pageRendering = true;
            pdfDoc.getPage(num).then(function (page) {
                let viewport = page.getViewport({ scale: scale });
                const containerWidth = pdfContainer.clientWidth - 40;
                if (viewport.width > containerWidth) {
                    const newScale = containerWidth / (viewport.width / scale);
                    viewport = page.getViewport({ scale: newScale });
                }
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = { canvasContext: ctx, viewport: viewport };
                const renderTask = page.render(renderContext);
                renderTask.promise.then(function () {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                        renderPage(pageNumPending);
                        pageNumPending = null;
                    }
                });
            });
            document.getElementById('pageNum').textContent = num;
        }

        function queueRenderPage(num) {
            if (pageRendering) {
                pageNumPending = num;
            } else {
                renderPage(num);
            }
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (pageNum <= 1) return;
            pageNum--;
            queueRenderPage(pageNum);
        });
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (pageNum >= pdfDoc.numPages) return;
            pageNum++;
            queueRenderPage(pageNum);
        });
        document.getElementById('zoomIn').addEventListener('click', () => {
            scale += 0.2;
            queueRenderPage(pageNum);
        });
        document.getElementById('zoomOut').addEventListener('click', () => {
            if (scale <= 0.4) return;
            scale -= 0.2;
            queueRenderPage(pageNum);
        });
    }
}
