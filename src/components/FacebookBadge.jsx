export default function FacebookBadge() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 auto', overflow: 'hidden' }}>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpalash.training%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden', maxWidth: '500px', margin: '0 auto' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Palash Training Facebook Page"
            ></iframe>
        </div>
    );
}
