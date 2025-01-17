import { Collapse } from "react-collapse";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import './Accordion.css'; // Import the CSS file

const Accordion = () => {
    const [open, setIsOpen] = useState({ l: false, r: false, s: false, w: false });

    console.log(open.l);

    return (
        <div className="text-color-white">
            <div className="bg-color border-b">
                <div className="flex items-center justify-between p-4">
                    <div><h4>Listening</h4></div>
                    <div className="text-xl font-semibold" onClick={() => setIsOpen({ l: true, r: false, s: false, w: false })}><button><FaPlus /></button></div>
                </div>
                <Collapse isOpened={open.l}>
                    <div className={`bg-white text-color-black py-2 px-4 fade ${open.l ? 'fade-in' : 'fade-out'}`}>
                        <h4>To get your IELTS Listening score calculated, just follow this procedure:</h4>
                        <table className="w-full mt-4">
                            <tbody>
                                <tr>
                                    <td className="font-semibold">Format</td>
                                    <td>
                                        <ul className="list-disc pl-5">
                                            <li>Recording 1: a conversation between two people set in an everyday social context.</li>
                                            <li>Recording 2: a monologue set in an everyday social context, e.g. a speech about local facilities.</li>
                                            <li>Recording 3: a conversation between up to four people set in an educational or training context, e.g. a university tutor and a student discussing an assignment.</li>
                                            <li>Recording 4: a monologue on an academic subject, e.g. a university lecture.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Number of Questions</td>
                                    <td>40 questions.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Timing</td>
                                    <td>The IELTS Listening test takes approximately 30 minutes, and you are allowed an extra 10 minutes to transfer your answers from your question booklet to your answer sheet.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Task types</td>
                                    <td>A variety of question types is used, chosen from the following: multiple choice, matching, plan/map/diagram labeling, form/note/table/flow-chart/summary completion, and sentence completion.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Marks</td>
                                    <td>Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>

            <div className="bg-color border-b">
                <div className="flex items-center justify-between p-4">
                    <div><h4>Reading</h4></div>
                    <div className="text-xl font-semibold"><button onClick={() => setIsOpen({ l: false, r: true, s: false, w: false })}><FaPlus /></button></div>
                </div>
                <Collapse isOpened={open.r}>
                    <div className={`bg-white text-color-black py-2 px-4 fade ${open.r ? 'fade-in' : 'fade-out'}`}>
                        <h4>The IELTS Reading test comprises of 3 paragraphs, for which you will get a total of 60 minutes to complete.</h4>
                        <table className="w-full mt-4">
                            <tbody>
                                <tr>
                                    <td className="font-semibold">Format</td>
                                    <td>
                                        <ul className="list-disc pl-5">
                                            <li>Three long texts range from descriptive and factual to discursive and analytical. These are taken from books, journals, magazines and newspapers. They have been selected for a non-specialist audience but are appropriate for people entering university courses or seeking professional registration.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Number of Questions</td>
                                    <td>40 questions.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Timing</td>
                                    <td>60 minutes including the transfer time.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Task types</td>
                                    <td>Fill gaps in a passage of written text or in a table, match headings to written text to diagrams or charts, complete sentences, give short answers to open questions, answer multiple choice questions.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Marks</td>
                                    <td>Each correct answer receives one mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>

            <div className="bg-color border-b">
                <div className="flex items-center justify-between p-4">
                    <div><h4>Speaking</h4></div>
                    <div className="text-xl font-semibold" onClick={() => setIsOpen({ l: false, r: false, s: true, w: false })}><button><FaPlus /></button></div>
                </div>
                <Collapse isOpened={open.s}>
                    <div className={`bg-white text-color-black py-2 px-4 fade ${open.s ? 'fade-in' : 'fade-out'}`}>
                        <h4>In the Speaking test, you will have a discussion with a certified examiner. It will be interactive and as close to a real-life situation as a test can get.</h4>
                        <table className="w-full mt-4">
                            <tbody>
                                <tr>
                                    <td className="font-semibold">Format</td>
                                    <td>
                                        <ul className="list-disc pl-5">
                                            <li>Part 1: The examiner will introduce him or herself and ask you to introduce yourself and confirm your identity. The examiner will ask you general questions on familiar topics, e.g. home, family, work, studies and interests. This section should help you relax and talk naturally.</li>
                                            <li>Part 2: The examiner will give you a task card which asks you to talk about a particular topic, including points to include in your talk. You will be given one minute to prepare and make notes. You will then be asked to talk for 1-2 minutes on the topic. You will not be interrupted during this time, so it is important to keep talking. The examiner will then ask you one or two questions on the same topic.</li>
                                            <li>Part 3: The examiner will ask you further questions which are connected to the topic of Part 2. These questions are designed to give you an opportunity to discuss more abstract issues and ideas.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Timing</td>
                                    <td>The IELTS Speaking test takes 11-14 minutes.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Marks</td>
                                    <td>You will be assessed on your performance throughout the test by certificated IELTS examiners. You will be marked on the four criteria: fluency and coherence, lexical resource, grammatical range and accuracy, pronunciation. Scores are reported in whole and half bands.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>

            <div className="bg-color border-b">
                <div className="flex items-center justify-between p-4">
                    <div><h4>Writing</h4></div>
                    <div className="text-xl font-semibold" onClick={() => setIsOpen({ l: false, r: false, s: false, w: true })}><button><FaPlus /></button></div>
                </div>
                <Collapse isOpened={open.w}>
                    <div className={`bg-white text-color-black py-2 px-4 fade ${open.w ? 'fade-in' : 'fade-out'}`}>
                        <h4>If you plan to study abroad, then you should take IELTS Academic module. And if you wish to work abroad, then you should take IELTS General module.</h4>
                        <table className="w-full mt-4">
                            <tbody>
                                <tr>
                                    <td className="font-semibold">Format</td>
                                    <td>
                                        <ul className="list-disc pl-5">
                                            <li>Write in a formal style in the IELTS Academic Writing test. In Task 1 you will be presented with a graph, table, chart or diagram. You will be asked to describe, summarise or explain the information in your own words. This might involve describing and explaining data, describing the stages of a process or how something works, or describing an object or event. In Task 2 you will be asked to write an essay in response to a point of view, argument or problem. You should find the issues interesting and easy to understand.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Number of Questions</td>
                                    <td>40 questions.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Timing</td>
                                    <td>The IELTS Writing test takes 60 minutes. Spend 20 minutes on Task 1, and 40 minutes on Task 2. You will need to manage your own time, so make sure you move on to Task 2 after 20 minutes.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Task types</td>
                                    <td>Two tasks: Task 1 and Task 2. You will be asked to write at least 150 words for Task 1 and at least 250 words for Task 2.</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Marks</td>
                                    <td>Your Writing test will be marked by a certificated IELTS examiner. Task 2 is worth twice as much as Task 1 in the IELTS Writing test. Scores are reported in whole and half bands.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default Accordion;