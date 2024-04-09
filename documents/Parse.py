def parse_questions(file_path):
    questions = []
    with open(file_path, 'r') as file:
        current_question = {}
        for line in file:
            line = line.strip()
            if not line:
                continue
            if line.startswith('(CA)'):
                correct_answer = line[4:]
                current_question['correctAnswer'] = correct_answer
                # Add the correct answer to the options list
                current_question.setdefault('options', []).append(correct_answer)
            elif line.endswith('?'):
                if current_question:
                    questions.append(current_question)
                current_question = {'question': line, 'options': []}
            else:
                current_question.setdefault('options', []).append(line)
        if current_question:
            questions.append(current_question)
    return questions

def write_js_file(questions, output_file):
    with open(output_file, 'w') as file:
        file.write('let questions = [\n')
        for q in questions:
            file.write('  {\n')
            file.write(f'    question: `{q["question"]}`, \n')
            file.write('    options: [\n')
            for option in q['options']:
                file.write(f'      `{option}`, \n')
            file.write('    ],\n')
            file.write(f'    correctAnswer: `{q["correctAnswer"]}` \n')
            file.write('  },\n')
        file.write('];\n')

if __name__ == '__main__':
    questions = parse_questions(r'documents\Questions.txt')
    write_js_file(questions, 'output.js')
