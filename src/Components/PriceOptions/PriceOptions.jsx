import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 9.99,
      features: ["Access to 10 projects", "Basic support", "Community access"],
    },
    {
      id: 2,
      name: "Standard",
      price: 19.99,
      features: [
        "Unlimited projects",
        "Priority email support",
        "Community access",
        "Basic analytics",
      ],
    },
    {
      id: 3,
      name: "Pro",
      price: 29.99,
      features: [
        "Unlimited projects",
        "24/7 phone support",
        "Advanced analytics",
        "Team collaboration tools",
        "Custom integrations",
      ],
    },
    {
      id: 4,
      name: "Enterprise",
      price: 49.99,
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Customizable solutions",
        "Onboarding & training",
        "Premium integrations",
      ],
    },
  ];

  return <div className="mt-20">
    {priceOptions.map(priceOption =>
     <PriceOption
     key={priceOption.id}
    priceOption={priceOption}
    >

    </PriceOption>)}
  </div>;
};

export default PriceOptions;
