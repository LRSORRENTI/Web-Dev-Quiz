def parse_questions(file_path):
    questions = []
    with open(file_path, 'r') as file:
        current_question = {}
        for line in file:
            line = line.strip()
            if not line:
                continue
            if line.startswith('(CA)'):
                current_question['correctAnswer'] = line[4:]
            elif line.endswith('?'):
                if current_question:
                    # Ensure every question has a correctAnswer key
                    current_question.setdefault('correctAnswer', '')
                    questions.append(current_question)
                current_question = {'question': line, 'options': []}
            else:
                current_question['options'].append(line)
        # Ensure the last question has a correctAnswer key
        current_question.setdefault('correctAnswer', '')
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
