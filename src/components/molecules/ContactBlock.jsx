import { Heading, Link } from "../atoms";

export default function ContactBlock({ title }) {
  return (
    <div>
      <Heading text={title} />
      <div className='flex flex-col'>
        <Link text="E-Comm , 4578 "></Link>
        <Link text="Marmora Road,"></Link>
        <Link text="Glasgow D04 89GR"></Link>
        </div>
    </div>
  );
}
