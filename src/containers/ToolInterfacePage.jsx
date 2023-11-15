import React, { useState, useRef } from 'react';
import ToolButton from '../components/ToolButton';
import '../styles/pages/ToolInterfacePage.css';

const ToolInterfacePage = () => {
    // Example tool buttons data

    const [currentTool, setCurrentTool] = useState('pencil');
    const canvasRef = useRef(null);

    const handleToolChange = (tool) => {
        setCurrentTool(tool);
        // Additional logic for activating the tool on the canvas
    };

    // Example onClick handler
    const handleCanvasClick  = (e) => {
        // console.log(`Tool clicked: ${toolId}`);
        // Implement tool click functionality here
    };

    return (
        <div>
            <main className="tool-interface">
                <div className="canvas-container">
                    <canvas
                        ref={canvasRef}
                        id="webtoonCanvas"
                        onClick={handleCanvasClick}
                        // Add other event handlers like onMouseMove, onMouseDown, onMouseUp for drawing
                    ></canvas>
                    <aside id="toolbar" className="toolbar">
                        <ToolButton 
                            label="Pencil" 
                            onClick={() => handleToolChange('pencil')}
                            icon="/images/pencil-icon.png" // Use the correct path to your image
                            active={currentTool === 'pencil'}
                        />
                        <ToolButton 
                            label="Eraser" 
                            onClick={() => handleToolChange('eraser')}
                            icon="/images/eraser-icon.png" // Use the correct path to your image
                            active={currentTool === 'eraser'}
                        />
                        {/* Add more ToolButtons for other tools */}
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default ToolInterfacePage;
