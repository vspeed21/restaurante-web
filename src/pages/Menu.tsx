/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Platillo as IPlatillo } from '../interface/platillo';
import useFirebase from '../hooks/useFirebase';
import Platillo from '../componenents/Platillo';

function Menu() {

  const [platillos, setPlatillos] = useState<IPlatillo[]>([]);

  const { firebase } = useFirebase();

  useEffect(() => {
    getPlatillos();
    function getPlatillos() {
      firebase.db.collection('platillos').onSnapshot(handleSnapshot)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSnapshot(snap: any) {
    const platillosSnap = snap.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });

    setPlatillos(platillosSnap);
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Menu</h1>
      <Link
        to='/nuevo-platillo'
        className="inline-block p-2 mt-3 mb-5 font-bold text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
      >
        Agregar platillo
      </Link>

      <section>
        {platillos.map(platillo => (
          <Platillo
            key={platillo.id}
            platillo={platillo}
          />
        ))}
      </section>

    </div>
  )
}

export default Menu;
