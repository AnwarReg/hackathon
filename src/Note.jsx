import React from 'react';
import Header from './Header';
import './Note.css';

const Note = ({ note }) => {
  return (
    <div className="note-page">
      <Header />
      <div className="note-content">
        {/* User who uploaded the note */}
        <div className="note-user">
          <p>Uploaded by: <strong>Srijan</strong></p>
        </div>

        {/* Note content */}
        <div className="note-text">
          <h2>English 101</h2>
          <p>1. Parts of Speech

Noun: A person, place, thing, or idea (e.g., dog, happiness).
Verb: An action or state of being (e.g., run, is).
Adjective: Describes a noun (e.g., blue, large).
Adverb: Describes a verb, adjective, or other adverb (e.g., quickly, very).
Pronoun: Replaces a noun (e.g., he, they).
Preposition: Shows a relationship between a noun and another word (e.g., on, after).
Conjunction: Connects words, phrases, or clauses (e.g., and, but).
Interjection: Shows emotion (e.g., wow, oh no).
2. Sentence Structure Basics

Simple Sentence: Contains one independent clause (e.g., "She reads").
Compound Sentence: Contains two independent clauses joined by a conjunction (e.g., "She reads, and he writes").
Complex Sentence: Contains one independent clause and one or more dependent clauses (e.g., "Although it was raining, they went for a walk").
Compound-Complex Sentence: Contains at least two independent clauses and one or more dependent clauses.
3. Thesis Statements

Definition: A thesis statement presents the main idea or argument of an essay.
Characteristics: Clear, concise, and specific. It should appear at the end of the introduction paragraph.
Example: "Social media has profoundly transformed communication by enhancing connectivity, allowing for widespread information sharing, and creating new avenues for personal expression."
4. Writing Process

Prewriting: Brainstorming, outlining, and gathering ideas.
Drafting: Writing the initial version of the essay.
Revising: Improving the content, structure, and flow.
Editing: Correcting grammar, spelling, and punctuation.
Publishing: Finalizing and submitting the written work.
5. Common Grammar Rules

Subject-Verb Agreement: The subject and verb must agree in number (e.g., "He runs" vs. "They run").
Comma Usage:
Use commas in lists (e.g., apples, oranges, and bananas).
Use after introductory phrases (e.g., "After the storm, the sky cleared").
Separate independent clauses with a comma and a conjunction (e.g., "She studied hard, and she passed the test").
Apostrophes: Show possession (e.g., "the dog’s leash") and form contractions (e.g., "don’t" for "do not").
6. Common Writing Mistakes

Run-On Sentences: When two independent clauses are joined without punctuation or a conjunction (e.g., "She loves reading she reads every night" should be "She loves reading, and she reads every night").
Fragment Sentences: An incomplete sentence that lacks a subject or verb (e.g., "Because he was late" should be "He was late because of traffic").
Misplaced Modifiers: Ensure modifiers are close to the word they describe (e.g., "She almost drove her kids to school every day" should be "She drove her kids to school almost every day").
7. Types of Essays

Narrative Essay: Tells a story with a clear sequence of events.
Descriptive Essay: Paints a picture with words, focusing on sensory details.
Expository Essay: Explains or informs the reader about a specific topic.
Persuasive Essay: Convinces the reader of a particular viewpoint.
8. MLA Formatting Basics

Header: Last name and page number in the upper right corner.
Title: Centered and follows proper capitalization.
Font: Times New Roman, 12 pt.
Double-Spacing: Entire document should be double-spaced.
In-Text Citations: Include the author's last name and page number (e.g., (Smith 23)).
</p>
        </div>
      </div>
    </div>
  );
};

export default Note;