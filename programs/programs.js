const programs = document.querySelectorAll('.program');
const programDetail = document.querySelector('.program__detail');

programs.forEach(item => {
    item.addEventListener('click', () => {

        // remove active (optional but good)
        programs.forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        if(item.classList.contains('express')) {
            programDetail.innerHTML = `
            <div class="container program__detail-container">
            <div class="program__left">
                <h2 class= "text">Express Learning</h2>
                <p class= "text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque et totam quasi ipsam maxime officiis distinctio quos
                      eos excepturi ad laborum, velit atque dicta facere!
                       Architecto mollitia quibusdam, a impedit dolore doloribus saepe.
                        Eum consectetur cupiditate dolorem optio, vero.
                </p>
                <div class="program__detail-image">
                    <div><img src="../assets/graduate2.webp" alt=""></div>
                    <div><img src="../assets/32323.jpg" alt=""></div>
                </div>
                <h4 class= "text">Included in weekday streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit maiores aut id a delectus.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Similique eius minus sit eos voluptates corrupti quis
                             vero tenetur at ipsam.
                        </p>
                    </article>
                <h4 class= "text">Included in weekend streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Practical lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="program__right">
                <article>
                    <h4 class= "text">Regular Without License</h4>
                    <div class= "text">
                        <h2 class= "text">€1,990</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€1,840</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>

                <article>
                    <h4 class= "text">Regular With Standard License</h4>
                    <div>
                        <h2 class= "text">€2,550</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€2,320</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>
                <article>
                    <h4 class= "text">Regular With Simple License</h4>
                    <div>
                        <h2 class= "text">€2,000</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€2,320</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>

                <article>
                    <h4 class= "text">Regular With Premuim License</h4>
                    <div>
                        <h2 class= "text">€2,950</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€3,250</h2>
                        <p class= "text">For Students</p>
                    </div>
                    <p class= "text">License will be ready after 2 weeks completion.</p>
                </article>
            </div>
        </div>`;
        }


        if(item.classList.contains('regular')) {
            programDetail.innerHTML = `<div class="container program__detail-container">
            <div class="program__left">
                <h2 class= "text">Regular Learning</h2>
                <p class= "text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque et totam quasi ipsam maxime officiis distinctio quos
                      eos excepturi ad laborum, velit atque dicta facere!
                       Architecto mollitia quibusdam, a impedit dolore doloribus saepe.
                        Eum consectetur cupiditate dolorem optio, vero.
                </p>
                <div class="program__detail-image">
                    <div><img src="../assets/graduate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpeg" alt=""></div>
                </div>
                <h4 class= "text">Included in weekday streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit maiores aut id a delectus.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Similique eius minus sit eos voluptates corrupti quis
                             vero tenetur at ipsam.
                        </p>
                    </article>
                <h4 class= "text">Included in weekend streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Practical lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="program__right">
                <article>
                    <h4 class= "text">Regular Without License</h4>
                    <div class= "text">
                        <h2 class= "text">€1,990</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€1,840</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>

                <article>
                    <h4 class= "text">Regular With Standard License</h4>
                    <div>
                        <h2 class= "text">€2,550</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€2,320</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>
                <article>
                    <h4 class= "text">Regular With Simple License</h4>
                    <div>
                        <h2 class= "text">€2,000</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€2,320</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>

                <article>
                    <h4 class= "text">Regular With Premuim License</h4>
                    <div>
                        <h2 class= "text">€2,950</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€3,250</h2>
                        <p class= "text">For Students</p>
                    </div>
                    <p class= "text">License will be ready after 2 weeks completion.</p>
                </article>
            </div>
        </div>`;
        }

        // POLISHING
            else if(item.classList.contains('polishing')) {
                programDetail.innerHTML = `<div class="container program__detail-container">
            <div class="program__left">
                <h2 class= "text">Polishing Learning</h2>
                <p class= "text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque et totam quasi ipsam maxime officiis distinctio quos
                      eos excepturi ad laborum, velit atque dicta facere!
                       Architecto mollitia quibusdam, a impedit dolore doloribus saepe.
                        Eum consectetur cupiditate dolorem optio, vero.
                </p>
                <div class="program__detail-image">
                    <div><img src="../assets/practical10.jpg" alt=""></div>
                    <div><img src="../assets/graduate6.jpg" alt=""></div>
                </div>
                <h4 class= "text">Included in weekday streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit maiores aut id a delectus.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Similique eius minus sit eos voluptates corrupti quis
                             vero tenetur at ipsam.
                        </p>
                    </article>
                <h4 class= "text">Included in weekend streams</h4>
                <p class= "text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit.
                    </p>
                    <article>
                        <h5 class= "text">Theory</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Theory lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5 class= "text">Practical lessons</h5>
                        <p class= "text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="program__right">
                <article>
                    <h4 class= "text">Regular Without License</h4>
                    <div>
                        <h2 class= "text">€1,990</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div>
                        <h2 class= "text">€1,840</h2>
                        <p class= "text">For Students</p>
                    </div>
                </article>

                <article class= "text">
                    <h4 class= "text">Regular With Standard License</h4>
                    <div>
                        <h2 class= "text">€2,550</h2>
                        <p class= "text">For non Students</p>
                    </div>

                    <div class= "text">
                        <h2>€2,320</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Simple License</h4>
                    <div>
                        <h2>€2,000</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€2,320</h2>
                        <p>For Students</p>
                    </div>
                </article>

                <article>
                    <h4>Regular With Premuim License</h4>
                    <div>
                        <h2>€2,950</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€3,250</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready after 2 weeks completion.</p>
                </article>
            </div>
        </div>`
            }

            // LICENSE
            else if(item.classList.contains('license')) {
                programDetail.innerHTML = `
<div class="container program__detail-container">
            <div class="program__left">
                <h2>Regular Learning</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque et totam quasi ipsam maxime officiis distinctio quos
                      eos excepturi ad laborum, velit atque dicta facere!
                       Architecto mollitia quibusdam, a impedit dolore doloribus saepe.
                        Eum consectetur cupiditate dolorem optio, vero.
                </p>
                <div class="program__detail-image">
                    <div><img src="../assets/graduate4.jpg" alt=""></div>
                    <div><img src="../assets/practical1.jpg" alt=""></div>
                </div>
                <h4>Included in weekday streams</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit maiores aut id a delectus.
                    </p>
                    <article>
                        <h5>Theory</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5>Theory lessons</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Similique eius minus sit eos voluptates corrupti quis
                             vero tenetur at ipsam.
                        </p>
                    </article>
                <h4>Included in weekend streams</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta illo vitae fugiat quas, ipsa reprehenderit.
                    </p>
                    <article>
                        <h5>Theory</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5>Theory lessons</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>

                    <article>
                        <h5>Practical lessons</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi deleniti!
                             Nihil molestias officiis odio dolor nam voluptates tenetur maiores,
                              rem molestiae commodi quam cupiditate reprehenderit atque reiciendis, autem.
                        </p>
                    </article>
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="program__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>€1,990</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€1,840</h2>
                        <p>For Students</p>
                    </div>
                </article>

                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>€2,550</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€2,320</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Simple License</h4>
                    <div>
                        <h2>€2,000</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€2,320</h2>
                        <p>For Students</p>
                    </div>
                </article>
        
                <article>
                    <h4>Regular With Premuim License</h4>
                    <div>
                        <h2>€2,950</h2>
                        <p>For non Students</p>
                    </div>

                    <div>
                        <h2>€3,250</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready after 2 weeks completion.</p>
                </article>
            </div>
        </div>`;
            }

    });
});