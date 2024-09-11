import React from 'react';
import './BlogSection.css';


function BlogSection() {
    const blogs = [
        {
            id: 1,
            title: 'The Future of Steel Manufacturing',
            date: 'August 10, 2024',
            excerpt: 'Explore how advancements in technology are shaping the future of steel manufacturing...',
            imageUrl: "https://media.istockphoto.com/id/538025236/photo/heap-of-shiny-metal-steel-pipes-with-selective-focus-effect.jpg?s=612x612&w=0&k=20&c=NU2vEghQxU77iNNYFwXbt9Q9TRIJUq5TnsUeQjQVMdY=",
        },
        {
            id: 2,
            title: 'Sustainability in the Steel Industry',
            date: 'July 20, 2024',
            excerpt: 'Sustainability is at the heart of our operations. Learn how we are making a difference...',
            imageUrl: 'path/to/image2.jpg',
        },
        {
            id: 3,
            title: 'Innovation in Steel Production',
            date: 'June 15, 2024',
            excerpt: 'Innovation drives our success. Discover the latest breakthroughs in steel production...',
            imageUrl: 'path/to/image3.jpg',
        }
    ];

    return (
        <div className="blog-section">
            <h2 className="section-title">Company Blog</h2>
            <div className="blog-list">
                {blogs.map((blog, index) => (
                    <div className="blog-card" key={blog.id} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="blog-card-image">
                            <img src={blog.imageUrl} alt={blog.title} />
                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-date">{blog.date}</p>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogSection;
