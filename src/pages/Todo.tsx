import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-4xl font-semibold text-center my-10">My Todo </h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
