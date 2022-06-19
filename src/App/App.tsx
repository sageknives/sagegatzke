import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import "./App.css";
import { AppNavigationBar } from "./AppNavigationBar";

export const App: FunctionComponent = () => {
  return (
    <Box
      sx={(theme) => ({
        scrollPaddingTop: "70px" /* height of sticky header */,
      })}
    >
      <CssBaseline />
      <AppNavigationBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        />
        <Box
          id="home"
          sx={(theme) => ({
            height: `calc(100vh - 70px)`,
          })}
        >
          <Typography variant="h3">Home</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis.
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            height: `calc(100vh - 70px)`,
          })}
        >
          <Typography variant="h3" id="about">
            About
          </Typography>
          <Typography>
            Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit
            debitis obcaecati error, delectus quo eius exercitationem tempore.
            Delectus sapiente, provident corporis dolorum quibusdam aut beatae
            repellendus est labore quisquam praesentium repudiandae non vel
            laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo
            quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium
            doloremque architecto laborum aliquid. Quae, maxime recusandae?
            Eveniet dolore molestiae dicta blanditiis est expedita eius debitis
            cupiditate porro sed aspernatur quidem, repellat nihil quasi
            praesentium quia eos, quibusdam provident. Incidunt tempore vel
            placeat voluptate iure labore, repellendus beatae quia unde est
            aliquid dolor molestias libero. Reiciendis similique exercitationem
            consequatur, nobis placeat illo laudantium! Enim perferendis nulla
            soluta magni error, provident repellat similique cupiditate ipsam,
            et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem
            saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem
            accusantium nulla. Aliquid inventore commodi reprehenderit rerum
            reiciendis!
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            height: `calc(100vh - 70px)`,
          })}
        >
          <Typography variant="h3" id="contact">
            Contact
          </Typography>
          <Typography>
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
        </Box>
        <Toolbar
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          })}
        />
      </Box>
    </Box>
  );
};
