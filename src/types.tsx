export interface question {
  "question": string;
  "correct_answer": string;
  "incorrect_answers": string[];
}

export interface fetchData {
  "response_code": number;
  "results": question[]
}