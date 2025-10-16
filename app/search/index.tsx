import { useAppTheme } from "@/context/ThemeProvider";
import { ThemedText, ThemedView } from "@/theme/ThemedComponents";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { BlurView } from "expo-blur";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChipViewHorizontal from "../components/ChipViewHorizontal";
import CustomAppBar from "../components/CustomAppBar";
import IconButton from "../components/IconButton";
const index = () => {
  const { colors } = useAppTheme();
  const buttonSize = 18;
  const imageSize = 12;
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        {/* Navigation Bar */}
        <View style={styles.appBar}>
          <CustomAppBar
            leftSide={
              <IconButton onPress={() => {}}>
                <Feather
                  name="arrow-left"
                  size={buttonSize}
                  color={colors.text}
                />
              </IconButton>
            }
            rightSide={
              <View style={{ flexDirection: "row", gap: 10 }}>
                <IconButton onPress={() => {}}>
                  <Feather
                    name="arrow-left"
                    size={buttonSize}
                    color={colors.text}
                  />
                </IconButton>
                <IconButton onPress={() => {}}>
                  <Feather
                    name="bookmark"
                    size={buttonSize}
                    color={colors.text}
                  />
                </IconButton>
                <IconButton onPress={() => {}}>
                  <SimpleLineIcons
                    name="options"
                    size={buttonSize}
                    color={colors.text}
                  />
                </IconButton>
              </View>
            }
          />
        </View>

        {/* Contents */}

        <ScrollView style={styles.content}>
          <ThemedText style={styles.titleText}>This is the title</ThemedText>

          {/* Chips */}
          <ChipViewHorizontal />

          <ThemedText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            saepe inventore. Quasi porro, dolorem quibusdam consequatur
            voluptate neque beatae dolore veniam veritatis ex. Ipsa cumque
            praesentium vitae mollitia. Consectetur, harum. Cupiditate ea
            repellendus veniam vero et nostrum fuga magni, nam maiores illum
            architecto cum at dignissimos sequi quam sunt delectus quidem culpa
            qui ipsum ullam sed dolore. Id, laboriosam voluptate. Dignissimos
            impedit est sed quos adipisci iste soluta officiis distinctio ipsum
            molestiae magnam vitae laudantium numquam et, minus hic possimus
            facilis, exercitationem doloribus veniam laborum dolorem? Autem
            nihil natus quam? Magnam corrupti ipsa aliquam nesciunt placeat
            perspiciatis quibusdam esse soluta fugiat, nam inventore quo nulla
            dolor eos molestiae totam accusamus. Saepe tempora, error nihil
            voluptatum cum distinctio placeat quaerat laborum? Assumenda,
            consequatur deleniti porro tenetur asperiores, magnam quas quo cum
            est enim, incidunt provident dolores libero rem ipsum odio facere
            numquam iusto dolorum perferendis fugit harum consequuntur illum.
            Culpa, ea. Non explicabo veniam nam vitae quisquam fugit beatae
            delectus dicta hic ipsa accusamus minima nemo blanditiis eveniet ad,
            optio illo quod harum. Sint inventore animi quas sequi facilis
            incidunt vitae. Nam earum dolorum unde consequuntur provident
            doloremque quae sapiente maiores voluptate! Voluptates assumenda
            facere nam fuga consequuntur, nisi saepe eveniet laudantium officiis
            dicta dolor odit incidunt beatae suscipit temporibus sint! Rerum
            esse, numquam enim similique possimus ab aspernatur aliquid nesciunt
            harum quo atque hic autem ducimus nam eum at dignissimos labore
            minima tempora beatae porro quod expedita! Voluptate, laboriosam.
            Dolore. Eius maiores sint voluptate nemo magnam ipsum. Ex molestiae
            cupiditate, sequi nam, quasi optio provident magni dicta rem
            explicabo fuga deleniti harum corrupti error nostrum, et beatae
            temporibus ut quia. Ea deserunt exercitationem sint. Quae ipsum vero
            iste quas aperiam quisquam deserunt, omnis officiis voluptatem
            expedita mollitia ratione, porro laudantium sed voluptates at atque
            animi cupiditate dignissimos accusamus nisi magni!
          </ThemedText>
        </ScrollView>

        {/* input Box */}
        <BlurView intensity={40} style={styles.messageContainer}>
          <TextInput
            style={[{ color: colors.text }, styles.textInput]}
            placeholder="Ask a follow up..."
          />
          <Pressable style={styles.addButton}>
            <MaterialCommunityIcons
              name="pencil-plus-outline"
              size={18}
              color={colors.text}
            />
          </Pressable>
        </BlurView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  appBar: {
    paddingHorizontal: 16,
  },

  titleText: { fontSize: 24 },
  textInput: {
    backgroundColor: "#252A2A",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
  },
  messageContainer: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
  },
  addButton: {
    backgroundColor: "#252A2A",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
