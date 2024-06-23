import { useState } from 'react';
import { LinearProgress, Button, Slider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormComponent = () => {
    const [value, setValue] = useState(null);
    const [questionNo, setQuestionNo] = useState(0);
    const [formData, setFormData] = useState([0, 0, 0, 0]);

    const marks = [
        { value: 0, label: <span className="flex flex-col md:flex-row"> <span>Strongly&nbsp;</span> Disagree</span> },
        { value: 25, label: 'Disagree' },
        { value: 50, label: 'Neutral' },
        { value: 75, label: 'Agree' },
        { value: 100, label: <span className="md:whitespace-nowrap whitespace-pre-line">Strongly Agree</span> },
    ];

    const handleNext = (res) => {
        setFormData((prevFormData) => {
            const updatedFormData = [...prevFormData];
            updatedFormData[questionNo] = res;
            return updatedFormData;
        });

        if (questionNo < questions.length - 1) {
            setQuestionNo(questionNo + 1);
            setValue(null);
        } else if (questionNo === questions.length - 1) {
            setQuestionNo(questionNo + 1);
        }
    };

    const handlePrev = () => {
        if (questionNo > 0) {
            setQuestionNo(questionNo - 1);
            setValue(0);
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTimeout(() => {
            handleNext(newValue);
        }, 500);
    };

    const questions = [
        { text: 'I have ambitious aims of making a difference.' },
        { text: 'My leadership journey has progressed as I anticipated.' },
        { text: 'I have spent fewer than 4 years in full-time service or ministry.' },
        { text: 'My plans are likely to succeed.' },
        { text: 'Done' },
    ];

    return (
        <div className='bg-white max-w-6xl mx-auto p-4 mt-20 rounded-lg'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                <div className='flex flex-col p-4'>
                    <div className="rounded-lg overflow-hidden">
                        <LinearProgress variant="determinate" value={(questionNo / 4) * 100} sx={{ height: 10 }} />
                    </div>
                    <p className='mx-auto text-sm md:text-lg text-custom-cyanBlue font-semibold'>IDEALISTIC</p>
                </div>
                <div className='flex flex-col p-4'>
                    <div className="rounded-lg overflow-hidden">
                        <LinearProgress variant="determinate" value={0} sx={{ height: 10 }} />
                    </div>
                    <p className='mx-auto text-sm md:text-lg font-semibold'>DISILLUSIONED</p>
                </div>
                <div className='flex flex-col p-4'>
                    <div className="rounded-lg overflow-hidden">
                        <LinearProgress variant="determinate" value={0} sx={{ height: 10 }} />
                    </div>
                    <p className='mx-auto text-sm md:text-lg font-semibold'>CYNICAL</p>
                </div>
                <div className='flex flex-col p-4'>
                    <div className="rounded-lg overflow-hidden">
                        <LinearProgress variant="determinate" value={0} sx={{ height: 10 }} />
                    </div>
                    <p className='mx-auto font-semibold text-sm md:text-lg'>HOPEFUL</p>
                </div>
            </div>
            {questionNo < 4 && (
                <div>
                    <div className='flex flex-col justify-center bg-white align-middle p-4 pb-10 my-5'>
                        <h3 className='text-2xl text-red-500 mt-10 mx-auto '>{questionNo + 1}/4</h3>
                        <p className="mx-auto text-2xl mt-10 font-semibold text-center">
                            {questions[questionNo].text}
                        </p>
                    </div>
                    <div className='mx-0 md:mx-40 mt-20'>
                        <div className='mx-8 pl-2'>
                            <Slider
                                aria-label="Restricted values"
                                onChange={handleChange}
                                value={value}
                                defaultValue={0}
                                step={25}
                                marks={marks}
                                sx={{
                                    color: '#8fcbd3',
                                    height: "10px",
                                    marginBottom: "0px",
                                    '& .MuiSlider-markLabel': {
                                        fontSize: ['1.0rem', '1.25rem'],
                                    },
                                }}
                            />
                        </div>
                        
                    </div>
                </div>
            )}
            {questionNo === 4 && (
                <div className='flex flex-col justify-center bg-white align-middle p-4 pb-10 my-5'>
                    <p className='mx-auto text-2xl mt-10 font-semibold'>{questions[questionNo].text}</p>
                    <p className='mx-auto text-2xl mt-10 font-semibold'>{formData.join(', ')}</p>
                </div>
            )}
            <div className='flex justify-between mt-16'>
                <Button
                    variant="text"
                    startIcon={<ArrowBackIcon />}
                    onClick={handlePrev}
                    disabled={questionNo === 0}
                    sx={{ color: 'black' }}
                >
                    PREV
                </Button>
                <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleNext(value)}
                    disabled={value === null}
                    sx={{ color: 'black' }}
                >
                    NEXT
                </Button>
            </div>
        </div>
    );
};

export default FormComponent;
