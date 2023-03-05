import Title from "../ulti/title";
import Item from "../ulti/item";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />

        <div
          className={`grid grid-cols-1 items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "xl:grid-cols-3 md:grid-cols-2"
              : "xl:grid-cols-4 md:grid-cols-3"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
