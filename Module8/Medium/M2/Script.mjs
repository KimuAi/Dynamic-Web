const resizeObserver = new ResizeObserver(entries => {
    const dashboard = document.getElementById('dashboard');
    const currentWidth = entries[0].contentRect.width;

    if (currentWidth < 600) {
        dashboard.dataset.columns = '1';
    } else if (currentWidth < 900) {
        dashboard.dataset.columns = '2';
    } else {
        dashboard.dataset.columns = '3';
    }

    document.getElementById('current-width').textContent = currentWidth;
    document.getElementById('column-count').textContent = dashboard.dataset.columns;
});

resizeObserver.observe(document.getElementById('container'));