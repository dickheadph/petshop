import React from "react";

function ContactCard(props) {
  const { month, price, desc } = props;
  return (
    <>
      <div className="m-4 w-full rounded-3xl border-[1px] border-pongkan-mid p-2 text-center">
        <h1 className="text-lg font-semibold">{month}</h1>
        <p>{price}</p>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default ContactCard;
