type TSting = {
  title: string;
};
const Title = ({ title }: TSting) => {
  return (
    <div>
      <p className="px-1 rounded bg-lime-100 text-lime-700 font-semibold text-md w-fit">
        {title}
      </p>
    </div>
  );
};

export default Title;
