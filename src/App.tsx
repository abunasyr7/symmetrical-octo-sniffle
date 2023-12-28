import "./App.css";
import Egypt from "../public/Egypt.svg";
import France from "../public/France.svg";
import USA from "../public/USA.svg";
import Greenland from "../public/Greenland.svg";
import Japan from "../public/Japan.svg";

const arrayOfObject = [
  {
    title: "Damietta",
    src: Egypt,
    phone: "+20 0219033",
    email: "alexbank@damietta.com",
    address:
      "3 Al Togari, Qism Damietta, Damietta, Damietta Governorate 34511, Egypt",
    small: false,
  },
  {
    title: "Lille",
    src: France,
    phone: "+33 3 20 54 44 50",
    email: "theatre-sebastobol@lille.fr",
    address: "Pl. Sébastopol, 59000 Lille, France",
    small: false,
  },
  {
    title: "Dayton",
    src: USA,
    phone: "+1 937 226 1710",
    email: "info@americaspackardmuseum.org",
    address: "420 S Ludlow St, Dayton, OH 45402, United States",
    small: true,
  },
  {
    title: "Kulusuk",
    src: Greenland,
    phone: "+299 98 69 88",
    email: "info@mit.gl",
    address: "HVF8+R82, Kulusuk, Greenland",
    small: true,
  },
  {
    title: "Kanazawa",
    src: Japan,
    phone: "+81 76 220 2469",
    email: "kanazawa@lg.jp",
    address: "1 Chome Higashiyama, Kanazawa, Ishikawa 920-0831, Japan",
    small: true,
  },
];
function App() {
  return (
    <div>
      <div className="header">
        <h1>Hello World</h1>
        <p>Always ready to meet with you.</p>
      </div>
      <main className="main">
        <div className="card-list">
          {arrayOfObject.map((card) => (
            <div className={card.small ? "card card-small" : "card card-big"}>
              <div className="card-header">
                <h2>{card.title}</h2>
                <img src={card.src} alt={card.src} />
              </div>
              <div className="card-info">
                <p className="card-info__phone">{card.phone}</p>
                <p className="card-info__email">{card.email}</p>
              </div>
              <div className="card-address">
                <p>{card.address}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
