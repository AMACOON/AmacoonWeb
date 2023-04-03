type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <h3>{title}</h3>;
}
