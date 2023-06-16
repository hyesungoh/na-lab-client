type QuestionFormType = 'tendency' | 'strength' | 'custom';

interface Choice {
  choice_id: string;
  content: string;
  order: number;
}

interface DefaultQuestion {
  question_id: string;
  form_type: QuestionFormType;
  title: string;
  order: number;
}

interface ShortQuestion extends DefaultQuestion {
  type: 'short';
  reply: string[];
}

/**
 * max_selectable_count 없음
 */
interface ChoiceQuestion extends DefaultQuestion {
  type: 'choice';
  choices: Choice[];
}

type Question = ShortQuestion | ChoiceQuestion;

type WithIsRead<T> = T & {
  is_read: boolean;
};

type ShortQuestionWithIsRead = WithIsRead<ShortQuestion>;

type ChoiceQuestionWithIsRead = WithIsRead<ChoiceQuestion>;

type QuestionWithIsRead = ShortQuestionWithIsRead | ChoiceQuestionWithIsRead;
