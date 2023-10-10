import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Blog = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = async () => {
        const querySnapshot = await getDocs(collection(db, 'BlogCollection'));
        console.log(querySnapshot.docs)
        setBlog(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderBlog = (blog) => {
        console.log(blog)
        return (
            <div className="images-container">
                {
                    blog.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="blog-image"
                                alt="blog" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container blog-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Blog".split("")}
                        idx={15}
                    />
                </h1>   
                <div>{renderBlog(blog)}</div>
            </div>
            <Loader type="line-spin-fade-loader" />
        </>
    );
}

export default Blog;