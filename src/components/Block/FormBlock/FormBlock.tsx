import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState, addChamp } from "../../../../utils/store/store";
import { Section } from "../../molecules/Section/Section";

export const FormBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.champ);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    resetField,
  } = useForm({
    defaultValues: {
      data: [
        {
          displayName: "",
          displayIcon: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "data",
  });
  const onSubmit = (data: any) => {
    dispatch(addChamp(data.data));
    resetField("data");
  };

  console.log(errors?.data?.[0]?.displayName);
  return (
    <Section title="Add an agent or more" colorScheme="yellow">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: "#ece8e1",
          padding: "20px",
          borderRadius: ".4rem",
        }}
      >
        <FormControl isRequired>
          {fields.map((field, index) => (
            <Flex key={field.id} flexDirection="column">
              <Text
                color="blue"
                textTransform="uppercase"
                pb="20px"
                {...(index > 0 && {
                  borderTop: "2px solid",
                  borderColor: "blue",
                  pt: "20px",
                })}
              >
                Agent n°{index + 1}
              </Text>
              <Box pb="20px">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  {...register(`data.${index}.displayName`, {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                    maxLength: 10,
                  })}
                />
                {errors?.data?.[index]?.displayName && (
                  <Text color="red">
                    {errors.data[index]?.displayName?.message}
                  </Text>
                )}
                <FormLabel>Photo Url</FormLabel>
                <Input
                  type="text"
                  placeholder="https://..."
                  {...register(`data.${index}.displayIcon`)}
                />
                {errors?.data?.[index]?.displayIcon && (
                  <Text color="red">
                    {errors.data[index]?.displayIcon?.message}
                  </Text>
                )}
              </Box>
              {index > 0 && (
                <Button
                  onClick={() => remove(index)}
                  mb="20px"
                  color="white"
                  bg="blue"
                  _hover={{ bg: "red" }}
                >
                  Delete
                </Button>
              )}
            </Flex>
          ))}
          <Button
            onClick={() =>
              append({
                displayName: "",
                displayIcon: "",
              })
            }
            w="full"
            color="white"
            bg="red"
            _hover={{ bg: "blue" }}
          >
            Add
          </Button>
          <Box>
            <Button
              w="full"
              mt={4}
              type="submit"
              color="white"
              bg="red"
              _hover={{ bg: "blue" }}
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
    </Section>
  );
};
