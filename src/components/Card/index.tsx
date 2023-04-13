import { Link } from "react-router-dom";
import { Container, Services } from "./styles";

type CardProps = {
  title: string;
  services: {
    label: string;
    url: string;
  }[];
};

export default function Card({ title, services }: CardProps) {
  return (
    <Container>
      <p>{title}</p>

      <Services>
        {services.map((service) => (
          <Link key={service.label} to={service.url}>
            {service.label}
          </Link>
        ))}
      </Services>
    </Container>
  );
}
