import React from 'react'
import PDFReader from '../PDFReader/PDFReader';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import './index.css'



const Resume = () => {
//pdfjs.GlobalWorkerOptions.workerSrc = new URL( "pdfjs-dist/build/pdf.worker.min.js", import.meta.url ).toString();
const pdfURL= "https://firebasestorage.googleapis.com/v0/b/himankportfolio.appspot.com/o/HimankJain.pdf?alt=media&token=495e63d9-e671-4ee4-8454-94da9bfdd30f&_gl=1*aldkys*_ga*OTczMzI1NzcxLjE2OTY1NzYwNDU.*_ga_CW55HF8NVT*MTY5Njg2MDk2Mi41LjEuMTY5Njg2MzAyMS41OC4wLjA.";
return (
  <PDFReader pdfURL={pdfURL}/>
  )
}   

export default Resume;