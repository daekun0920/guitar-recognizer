import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import './Recognizer.css'

function Recognizer() {
    // the link to your model provided by Teachable Machine export panel
    const URL = 'https://teachablemachine.withgoogle.com/models/MDzFGcKhs/';
 
    let model, guitar__label, maxPredictions;
    
    function removeUpload() {
        
    }
    
    function readURL(input) {
        

        if (input[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById('guitar-image').src = e.target.result;
            };
            
            reader.readAsDataURL(input[0]);
        } else {
            removeUpload();
       }
    }
    
    // Load the image model
    async function init() {
        
        const modelURL = URL + 'model.json';
        const metadataURL = URL + 'metadata.json';

        // load the model and metadata
        model = await window.tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        guitar__label = document.getElementById('guitar__label');
        guitar__label.innerHTML = "";
        
        // predict can take in an image
        var image = document.getElementById('guitar-image');
        
        
        const prediction = await model.predict(image, false);
        
        var max = "";
        var maxNum = 0;
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) > maxNum) {
                maxNum = prediction[i].probability.toFixed(2);
                max = prediction[i].className;
            } 
        }    
        guitar__label.innerHTML = max;
    }

    const onDrop = useCallback(acceptedFiles => {
        guitar__label = document.getElementById('guitar__label');
        guitar__label.innerHTML = "";

        document.getElementById('spinner-border').style.display = 'block';
        readURL(acceptedFiles);
        
        init().then(() => {
            document.getElementById('spinner-border').style.display = 'none';
        });
        
        
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <div className="container text-center">
            
            <div {...getRootProps()} className="guitar__container">
                <h1 id="label-container" className="label-container">
                    <div className="guitar__label" id="guitar__label">

                    </div>
                    <div className="spinner-border" role="status" id="spinner-border">
                        
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </h1>
               
                <img id="guitar-image" src="http://simpleicon.com/wp-content/uploads/plus.png" alt="" className="card-img guitar__image"/>
                <div className="dnd__container">
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the file here</p> :
                    <p>Drag and drip a file here or click to select a file</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Recognizer
