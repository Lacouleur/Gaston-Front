// == Import : npm
import React from 'react';

// == Import : local
import './tresors.scss';

// == Composant
const Tresors = () => (
  <>
    <div className="tresor-category-container">
      <p className="tresor-category-title">Filtres:</p>
      <div className="tresor-category-filter">
        <button className="button--don">dons</button>
        <button className="button--help">demande d'aide</button>
        <button className="button--event">évenement</button>
        <button className="button--treasure">récuperation</button>
      </div>
    </div>
    <div className="tresors-container">
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image1.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>Myths About DUMPSTER</h2>
          <h3>Matt Ador</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
            <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image2.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>Proof That DUMPSTER</h2>
          <h3>Ray Défess</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
          <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image3.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>The Lazy Man's</h2>
          <h3>Lara Clette</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
          <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image4.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>Fall In Love</h2>
          <h3>Emma Toudoné</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
          <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image5.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>Using 7 DUMPSTER</h2>
          <h3>Hector Ticolis</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
          <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
      <article className="tresor-cards">
        <div className="tresor-cards-left">
          <img
            className="tresor-cards-image"
            src="public/Images/image6.jpg"
            alt="image1"
            className="tresor-cards-image"
          />
          <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
        </div>
        <div className="tresor-cards-right">
          <h2>Remarkable Website</h2>
          <h3>Aby Cyclette</h3>
          <p>
            Description : dolor sit amet consectetur, adipisicing elit.
            Aspernatur
          </p>
          <div>
            <button className="button-category">Meuble</button>
            <button className="button-category">Nourriture</button>
          </div>
          <div>
          <buton className="button--vanish">Il n'y est plus </buton> <buton className="button--got-it">je l'ai récupéré</buton>
          </div>
        </div>
      </article>
    </div>
  </>
);

// == Export
export default Tresors;
