import { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const MiningButtons = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const updateProgress = setInterval(() => {
            if (progress > 0) {
                setProgress(progress -1);
            }
        }, 100);

        return () => clearInterval(updateProgress);
    }, [progress]);

    return (
        <div className="m-3 d-flex">
            <Button variant="primary"
                className="mine-button w-100 p-0"
                onClick={() => setProgress(100)}
                disabled={progress !== 0}>
                
                    <div className="position-relative h-100 w-100">

                        <ProgressBar variant="primary" 
                            now={100 - progress} 
                            className="h-100 w-100"
                            disabled="false"
                            />
                        
                        <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                            {
                                <>
                                    <div hidden={!progress}>
                                        {progress}
                                    </div>
                                    <div hidden={progress}>
                                        <i class="fa-solid fa-bolt" /> Mine
                                    </div>
                                </>
                            }
                        </div>
                    </div>
            </Button>

            <div className="d-flex w-100 justify-content-end">
                <Button variant="secondary"
                    className="other-button w-100 mx-2"
                    disabled>
                    <i class="fa-solid fa-dollar-sign" /> Sell
                </Button>
                <Button variant="secondary"
                    className="other-button w-100"
                    disabled>
                    <i class="fa-solid fa-tag" /> Shop
                </Button>
            </div>
        </div>
    )
}

export default MiningButtons;