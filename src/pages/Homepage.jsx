import CardMovie from "../components/CardMovie";

const Homepage = () => {
  return (
    <>
      <h1>sono la homepage</h1>
      <div className="row">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
    </>
  );
};

export default Homepage;
