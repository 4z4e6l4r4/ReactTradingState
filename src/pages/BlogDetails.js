import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const {slug} = useParams();

    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState({});

    const    getBlogs = () => {
        fetch("http://localhost:3000/blog").then(res => res.json()).then(json => setBlogs(json))
    };

    useEffect(() => {
        getBlogs();  
        console.log(slug);
    }, [])
    
    useEffect(() => {
        setSelectedBlog  (blogs.find((Blog)=> Blog.slug == slug));
        console.log(selectedBlog);
    }, [blogs])
    
    
  return (
    <>
      <div className="breadcrumb-area section-space--breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">Blog Post</h2>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Blog Post</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content-wrapper">
        <div className="blog-page-area">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 ps-5 order-2">
                <div className="blog-sidebar-wrapper">
                  <div className="single-sidebar-widget single-sidebar-widget--extra-space">
                    <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">
                      Search
                    </h2>
                    <div className="sidebar-search">
                      <form action="#">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">
                      Recent Posts
                    </h2>
                    <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                      <li>
                        <a href="blog-left-sidebar.html">
                          The Difference Between Green Furniture and Sustainable
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          A Busy Person Guide To Getting Organized Room
                        </a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          Three Sneaky Storage Solutions For Small Spaces
                        </a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          The Future of Senior Housing
                        </a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          Creating An Organized Multi-Use Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">
                      Recent Comments
                    </h2>
                    <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
                      <li>
                        <span className="commenter">Alisa</span> on{" "}
                        <a href="blog-left-sidebar.html">
                          {" "}
                          The Difference Between Green Furniture and Sustainable
                          Furniture
                        </a>
                      </li>
                      <li>
                        <span className="commenter">David</span> on{" "}
                        <a href="blog-left-sidebar.html">
                          A Busy Person Guide To Getting Organized Room
                        </a>
                      </li>
                      <li>
                        <span className="commenter">Rashed</span> on{" "}
                        <a href="blog-left-sidebar.html">
                          Three Sneaky Storage Solutions For Small Spaces
                        </a>
                      </li>
                      <li>
                        <span className="commenter">Luis</span> on{" "}
                        <a href="blog-left-sidebar.html">
                          The Future of Senior Housing
                        </a>
                      </li>
                      <li>
                        <span className="commenter">Saddam</span> on{" "}
                        <a href="blog-left-sidebar.html">
                          Creating An Organized Multi-Use Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">Archives</h2>
                    <ul className="single-sidebar-widget__dropdown">
                      <li>
                        <a href="blog-left-sidebar.html">July 2019</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">March 2019</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">Categories</h2>
                    <ul className="single-sidebar-widget__dropdown">
                      <li>
                        <a href="blog-left-sidebar.html">Furniture</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Interior</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Uncategorized</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-9  order-1">
                <div className="blog-single-post-details-wrapper">
                  <h2 className="post-title">
                    {
                        selectedBlog && (selectedBlog.title)
                    }
                  </h2>
                  <p className="post-meta">
                    By{" "}
                    <a href="#" className="post-author">
                      admin
                    </a>{" "}
                    <span className="separator">|</span>{" "}
                    <a href="#">
                        
                        {
                            selectedBlog && (selectedBlog.date)
                        }
                    </a>
                  </p>
                  <div className="post-thumbnail">
                    {
                        selectedBlog && (
                        <img
                             src={process.env.PUBLIC_URL + "/" + selectedBlog.image} 
                             className="img-fluid"
                             alt=""
                           />
                           )
                    }
                  </div>
                  <div className="post-text-content">
                    <p>
                      {
                        selectedBlog && (selectedBlog.desc)
                      }
                    </p>
                  </div>
                  <div className="post-share-section">
                    <span>SHARE :</span>
                    <ul className="post-social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-comments-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="blog-details-section-title">
                        Comments (3)
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="blog-comments-wrapper">
                        <div className="single-blog-comment">
                          <div className="single-blog-comment__image">
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/review/one.png"}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-blog-comment__content">
                            <div className="comment-time">
                              <i className="fa fa-calendar" /> June 7, 2019
                            </div>
                            <p className="comment-text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Fuga, in.
                            </p>
                          </div>
                        </div>
                        <div className="single-blog-comment single-blog-comment--reply">
                          <div className="single-blog-comment__image">
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/review/two.jpg"}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-blog-comment__content">
                            <div className="comment-time">
                              <i className="fa fa-calendar" /> June 8, 2019
                            </div>
                            <p className="comment-text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Fuga, in.
                            </p>
                          </div>
                        </div>
                        <div className="single-blog-comment">
                          <div className="single-blog-comment__image">
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/review/three.jpg"}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-blog-comment__content">
                            <div className="comment-time">
                              <i className="fa fa-calendar" /> June 9, 2019
                            </div>
                            <p className="comment-text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Fuga, in.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-comment-form-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="blog-details-section-title">
                        Leave a comment
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-form-wrapper">
                        <form action="#" method="post">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <input
                                type="text"
                                placeholder="Your Name (*)"
                                required=""
                              />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <input
                                type="text"
                                placeholder="Email (*)"
                                required=""
                              />
                            </div>
                            <div className="col-lg-4">
                              <input type="text" placeholder="Website" />
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                cols={30}
                                rows={10}
                                placeholder="Message *"
                                required=""
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                id="submit"
                                className="theme-button"
                              >
                                {" "}
                                ADD COMMENT
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
