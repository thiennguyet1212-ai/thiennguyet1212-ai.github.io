function parseHTML(html) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');
	return doc.body.textContent;
}

function extractImageUrl(description) {
	const match = description.match(/<img.*?src="(.*?)"/);
	return match ? match[1] : null;
}

async function displayNews(rssUrl) {
	const loadingPlaceholder = document.getElementById('loading-placeholder');
	const newsList = document.getElementById('news-list');

	try {
        console.log("Đang bắt đầu tải tin tức..."); // Thêm dòng này để kiểm tra
		loadingPlaceholder.classList.remove('d-none');
		newsList.classList.add('d-none');
		
		const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`);
		const data = await response.text();
		
        const parser = new DOMParser();
		const xml = parser.parseFromString(data, 'application/xml');
		const items = xml.querySelectorAll('item');

		newsList.innerHTML = '';

		items.forEach(item => {
			const title = item.querySelector('title').textContent;
			const link = item.querySelector('link').textContent;
			const description = item.querySelector('description').textContent;
			const pubDate = new Date(item.querySelector('pubDate').textContent);

			const imageUrl = extractImageUrl(description);
			
			const articleDiv = document.createElement('div');
			articleDiv.className = 'col-12 col-md-6 col-lg-4 mb-4';
			
			articleDiv.innerHTML = `
				<div class="card h-100">
					<img src="${imageUrl}" class="card-img-top" alt="${title}" onerror="this.src='https://picsum.photos/400/200'">
					<div class="card-body">
						<h5 class="card-title">${title}</h5>
						<p class="card-text">${parseHTML(description)}</p>
						<p class="card-text">
							<small class="text-muted">${pubDate.toLocaleString('vi-VN')}</small>
						</p>
						<div class="d-flex gap-2">
							<a href="${link}" target="_blank" class="btn btn-primary">
							Đọc thêm
							</a>
						</div>
					</div>
				</div>
			`;
			newsList.appendChild(articleDiv);
		});

		loadingPlaceholder.classList.add('d-none');
		newsList.classList.remove('d-none');
        console.log("Tải tin tức thành công!");

	} catch (error) {
		console.error('Lỗi khi tải tin tức:', error);
		loadingPlaceholder.innerHTML = `
		<div class="col-12 text-center mt-5">
			<h5 class="text-danger">Lỗi tải tin tức. Vui lòng thử lại sau.</h5>
            <p class="text-muted">Chi tiết lỗi: ${error.message}</p>
		</div>`;
	}
}