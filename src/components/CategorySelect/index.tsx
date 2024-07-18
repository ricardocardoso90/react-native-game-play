import { Container } from "./styles";
import { Category } from "../Category";
import { categories } from "../../utils/categories";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(item => {
          return (
            <Category
              key={item.id}
              title={item.title}
              icon={item.icon}
              checked={item.id === categorySelected}
              onPress={() => setCategory(item.id)}
              hasCheckBox={hasCheckBox}
            />
          )
        })
      }
    </Container>
  )
};