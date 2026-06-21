import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export default function LeftAlignedTimeline({
  year,
  course,
  college,
  CGPAandDate,
}) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          style={{
            fontWeight: "bold",
          }}
        >
          {year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          {course} <br /> {college} <br /> {CGPAandDate}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
