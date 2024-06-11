import { Container, Button } from "@mui/material"
import "./styles.css"



export function About(){


    return (
        <>
            <Container className="container">
                <h2 >Always learning new technologies that help me deliver the best solutions!</h2>
                <p>As a Full Stack Developer and teaching assistant at Kenzie Academy Brasil, I combine my passion for technology and education to create and assist complex web applications using various tools and frameworks. At Kenzie Academy's bootcamp I learned how to use JavaScript, TypeScript, React, Node.js, Express, Nest, Python, Django, PostgreSQL, and other technologies to build and consume RESTful APIs, work with databases, and apply object-oriented programming concepts.</p>
                <p>Before switching to web development, I had a career in marketing and product management, where I developed and structured product lines from market research to launch, managing development schedules, profitability analysis, pricing, assortment, sales forecasting, and packaging design. I also have a degree in communication and marketing from ESPM, and I speak fluent English, having taken Business Administration course in Dublin.</p>
                <div className="div-button">
                    <Button variant="contained">Techs</Button>
                    <Button variant="contained">Projects</Button>

                </div>
            </Container>
        </>
    )
}