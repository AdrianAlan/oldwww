import React from "react";
import Story from "../sections/Story";
import Program from "../sections/Program";
import Directions from "../sections/Directions";
import Logement from "../sections/Logement";
import Gifts from "../sections/Gifts";
import Tips from "../sections/Tips";
import Request from "../sections/Request";
import { useSearchParams } from 'react-router-dom';
import content from "../../content.json";

function Content() {
  const [searchParams, setSearchParams] = useSearchParams();

  var c = {};

  if (searchParams.get('lang') === 'es') {
    c = content.es;
  } else if (searchParams.get('lang') === 'pl') {
    c = content.pl;
  } else {
    c = content.en;
  }
  var stroy = c;
  var program = c;
  var directions = c;
  var logement =c;
  var tips = c;
  var gifts = c;
  var request = c;

  return (
    <main>
      <Story {...stroy} />
      <Program  {...program} />
      <Directions {...directions} />
      <Logement {...logement} />
      <Tips {...tips} />
      <Gifts {...gifts} />
      <Request {...request} />
    </main>
  );
}

export default Content;
