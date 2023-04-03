type SubtitleProps = {
  subtitle: string;
};

export default function Subtitle({ subtitle }: SubtitleProps) {
  return <h5>{subtitle}</h5>;
}
