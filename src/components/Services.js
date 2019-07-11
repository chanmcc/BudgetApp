import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "Book direct and receive a free welcome drink"
      },
      {
        icon: <FaHiking />,
        title: "Day Tours",
        info: "Guided sightseeing and intercity bus tours"
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle service",
        info: "Effortless transfer between airport and hotel"
      },
      {
        icon: <FaBeer />,
        title: "Happy hour",
        info: "Discover bar lounges and enjoy special discounts"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
