import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          We are dedicated to revolutionizing domestic waste management 
          through innovative and sustainable solutions. Our mission is 
          to empower households with practical tools and knowledge to effectively
          manage waste, reduce environmental impact, and promote recycling. 
          We believe that small changes at the individual level can lead to 
          significant positive outcomes for our communities and the planet. 
          Our team of experts is committed to providing reliable resources and 
          support, making waste management easier and more efficient for everyone.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          We are a pioneering platform focused on transforming domestic 
          waste management. Our website offers a range of resources, tools, 
          and guidance to help individuals and families manage waste more 
          effectively. We provide practical tips on recycling, composting, 
          and reducing waste to promote a cleaner environment. By integrating
          technology and expert insights, we aim to simplify waste management 
          practices and support sustainable living. Our goal is to make waste 
          management accessible and impactful for every household.
            <br />

          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
