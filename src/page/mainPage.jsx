import React from "react";
import "./mainPage.css";
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    PlaceholderParagraph,
    PlaceholderLine,
    PlaceholderImage,
    PlaceholderHeader,
    Button,
    Card,
    Divider,
    Image,
    Placeholder,
    GridColumn,
    Container,
    Grid,
} from 'semantic-ui-react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

/*
  const cards = [
    {
      avatar: '/images/avatar/large/helen.jpg',
      date: 'Joined in 2013',
      header: 'Helen',
      description: 'Primary Contact',
    },
    {
      avatar: '/images/avatar/large/matthew.png',
      date: 'Joined in 2013',
      header: 'Matthew',
      description: 'Primary Contact',
    },
    {
      avatar: '/images/avatar/large/molly.png',
      date: 'Joined in 2013',
      header: 'Molly',
      description: 'Primary Contact',
    },
  ]


export default function MainPage() {
return(
    <div className="background-main">

        <div>
            <Grid columns={2} relaxed='very'>
                <GridColumn>
                    <p>
                        <Image src='/images/wireframe/short-paragraph.png' />
                    </p>

                </GridColumn>
                <GridColumn>
                    <Container>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                    </Container>
                </GridColumn>
            </Grid>
        </div>
        <div>

        </div>
        <div>
            <Swiper
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                style={{ zIndex: "0" }}
            >
                <SwiperSlide>
                    <img src={Banner1} alt="" className="slide-item" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner2} alt="" className="slide-item" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner3} alt="" className="slide-item" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner4} alt="" className="slide-item" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    );
}
*/