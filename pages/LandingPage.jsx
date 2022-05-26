import React from 'react'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import style from '../styles/LandingPage.module.css'

function LandingPage() {
  return (
    <div>
      <div className="container">
        <span className={style.logo}>
          <Image
            src="/img/Full Color 1.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </span>
        <section>
          <p className={style.pAtas}>Back to main page</p>
          <div className={style.conten}>
            <h1 className={style.h1}>
              Tired of the old way <br /> of selling online?
            </h1>
            <p className={style.pBawah}>
              Try BIG Tenant, feel the new experience of online selling in
              virtual world. Register, earn money, and let’s get rich!
            </p>
            <Button className={style.btn}>Register now</Button>
          </div>
        </section>
        <div className={style.flex}>
          <span className={style.hpKiri}>
            <Image
              src="/img/3.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </span>
          <span className={style.hpKanan}>
            <Image
              src="/img/02.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </span>
          <span className={style.ellipse7}>
            <Image
              src="/img/7.png"
              alt="Picture of the author"
              width={700}
              height={300}
            />
          </span>
          <span className={style.vector}>
            <Image
              src="/img/Vector.png"
              alt="Picture of the author"
              width={400}
              height={600}
            />
          </span>
          <div className={style.sembilan}>
            <Image
              src="/img/9.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <span className={style.keranjang}>
              <Image
                src="/img/Vector 1.png"
                alt="Picture of the author"
                width={80}
                height={60}
              />
            </span>
            <div>
              <div className={style.order}>
                <img src="4.png" alt="" />
              </div>
              <p className={style.newOrder}>New order</p>
              <h5 className={style.jaydon}>Jaydon Curtis</h5>
              <span className={style.arounded}>
                <Image
                  src="/img/unsplash.png"
                  alt="unsplash"
                  width={50}
                  height={50}
                />
              </span>
            </div>
            <div className={style.income}>
              <img src="/img/4.png" alt="Picture of the author" />
            </div>

            <p className={style.textHarga}>Total income</p>
            <h4 className={style.harga}>Rp.3.500.000,-</h4>
          </div>
          <div>
            <span className={style.kotak}>
              <Image
                src="/img/9.png"
                alt="Picture of the author"
                width={10}
                height={10}
              />
              <span className={style.bag}>
                <Image
                  src="/img/bag.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </span>
            </span>
          </div>
          <div className={style.delapan1}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan2}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan3}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan4}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan5}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan6}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
          <div className={style.delapan7}>
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
            <Image
              src="/img/8.png"
              alt="Picture of the author"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
