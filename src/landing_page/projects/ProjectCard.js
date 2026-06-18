import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ProjectCard({
  imageURL,
  projectName,
  projectDesription,
  likedinURL,
  githubURL,
}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <div className="border">
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={imageURL}
            alt="Wanderlust"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {projectName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {projectDesription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={likedinURL} target="_blank">
              <LinkedInIcon />
              Likedin
            </a>
          </Button>
          <Button size="small" color="primary">
            <a href={githubURL} target="_blank">
              <GitHubIcon />
              Github
            </a>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
