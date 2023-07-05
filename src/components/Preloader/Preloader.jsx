import preloader from '../../images/preloader.png';

function Preloader() {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader" />
    </div>
  );
}
export { Preloader };
