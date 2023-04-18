import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { confTrack } from "../../constants";
import "./conftrack.scss";

export default function ConfTrackSection() {
  return (
    <div className="conf-track-wrapper">
      <h2 className="title">Conference Tracks</h2>
      <div className="conf-track-container">
        <div className="track-details">
          {confTrack.map((data, i) => (
            <div className="track-card" key={i}>
              <div className="track-card-header">
                <p className="card-title">{data.title}</p>
              </div>
              <div className="track-card-body">
                <ul>
                  {data.track.map((track, i) => (
                    <li key={i}>{track}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="track-date">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Paper Submission Due
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>SUBMISSION CLOSED</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Notification of Acceptance
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>15th December 2022</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Camera Ready Submission
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>10th January 2023</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Important Links
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <a
                  href="https://easychair.org/conferences/?conf=otcon2022"
                  target="_blank"
                >
                  Submit Paper »
                </a>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
