import React, { useState, useEffect, useRef } from 'react'
import folderIcon from 'assets/folder-icon.svg'
import fileIcon from 'assets/file-icon.svg'

const UrlForm = () => {

    const [data, setData] = useState(null);
    const [url, setUrl] = useState('');
    const divRef = useRef(null);

    const fetchData = async () => {
        try {
            if (!url) return;
            const res = await fetch(`http://localhost:3000/api/v1/parsedhtml?url=${url}`);
            const finalData = await res.json();
            // console.log(finalData);
            setData(finalData);
            setUrl('');

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (data) {
            const ans = traverse(data, 0);
            console.log(ans, '<-----');
            console.log(divRef.current);
            divRef.current.innerHTML = ans;
        }
    }, [data])

    const handleClick = () => {
        if (url) {
            console.log(url);
            fetchData();
        }
    }

    const handleClear = () => {
        setUrl('');
        divRef.current.innerHTML = '';
    }

    const traverse = function (node: any, count: any): string {

        let n = Object.entries(node);
        var currentNode = n[0];
        if (currentNode[0] == 'script') return '';

        let parentTag = 
            `<details>
                <summary 
                    style=" margin-left: 0px; 
                            padding: 10px 0 10px ${count == 0? 10 : count * 30}px; 
                            border-bottom: 1px solid #ddd;">
                        <img 
                            style="margin-bottom: -5px;" 
                            src=${folderIcon} 
                            width='20px' 
                            height='20px' 
                            alt="" 
                        /> 
                            ${currentNode[0]}
                </summary>`

        if (!currentNode[1]?.__children.length) {
            parentTag = 
                `<summary 
                    style=" margin-left: 0px; 
                            padding: 10px 0 10px ${count * 30}px; 
                            border-bottom: 1px solid #ddd;">
                            <img 
                                style="margin-bottom: -5px;" 
                                src=${fileIcon} 
                                width='20px' 
                                height='20px' 
                                alt="" 
                            /> ${currentNode[0]}
                </summary>`
        }

        if (currentNode.length) {

            for (var i = 0; i < currentNode[1]?.__children?.length; i++) {
                let ans = traverse(currentNode[1]?.__children[i], count + 1);
                parentTag = parentTag + ans;
            }

            if (currentNode[1]?.__children.length) {
                parentTag = parentTag + '</details>';
            }
        }

        return parentTag;
    }

    return (
        <div
            style={{
                width:'860px', 
                margin:'0 auto'
            }}
        >
            <div 
                style={{
                    borderRadius:'5px', 
                    border:'1px solid #ddd'
                }}
            >
                <h1 style={{
                    padding:'10px 30px', 
                    borderBottom: '1px solid #ddd'
                    }}>Html Folder Structure</h1>
                <div className='folder' ref={divRef}></div>
            </div>

            <div 
                style={{
                    textAlign:'center',
                    paddingTop: '30px'
                }}
            >
                <h2>Input</h2>
                <input 
                    style={{
                        padding: '10px 0px', 
                        fontSize: '16px', 
                        width: '100%',
                        maxWidth: '500px',
                        border: 'none', 
                        borderBottom: '1px solid #ddd', 
                        outline: 'none',
                        marginBottom: '30px'
                    }} 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    type="text" 
                    placeholder='url...' 
                />

                <div>
                    <button 
                        style={{ 
                            padding: '10px 30px', 
                            borderRadius: '5px', 
                            outline: 'none',
                            border: '2px solid #333', 
                            background: '#fff',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginRight: '5px',
                            cursor: 'pointer'
                        }} 
                        onClick={handleClear}
                    >
                            Clear
                    </button>
                    <button 
                        style={{ 
                            padding: '10px 30px', 
                            borderRadius: '5px', 
                            outline: 'none',
                            border: '2px solid #333', 
                            background: '#333',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginLeft: '5px',
                            cursor: 'pointer'
                        }} 
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </div>
            </div>

        </div >
    )
}

export default UrlForm
