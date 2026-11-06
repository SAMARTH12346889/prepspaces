/**
 * AI ENGINEERING & GENERATIVE AI - MODULE 05
 * Comprehensive University-Grade Curriculum Data: Natural Language Processing (NLP) Engineering
 * 
 * Detailed across 10 in-depth curriculum units, 8 hands-on practical labs,
 * capstone project (Intelligent Customer Review Analysis System),
 * technical interview prep, 10 quiz assessments, and academic bibliography.
 */

export const NLP_CURRICULUM_UNITS = [
  {
    id: "unit-01",
    part: "Part I: Foundations of Natural Language Processing",
    partNumber: 1,
    unitNumber: 1,
    title: "What is Natural Language Processing & Why Human Language is Difficult?",
    duration: "3.5 Hours",
    level: "Foundation to Intermediate",
    summary:
      "Deep exploration of computational linguistics, the hierarchy of human language levels, the fundamental challenges of contextual ambiguity, polysemy, syntactic nuance, and the historic evolution from rule-based parsers to neural language models.",
    coreConcepts: [
      "Linguistic Hierarchy (Phonetics, Morphology, Syntax, Semantics, Pragmatics, Discourse)",
      "Ambiguity Taxonomy: Lexical, Syntactic, Semantic, and Pragmatic",
      "NLP vs. NLU (Natural Language Understanding) vs. NLG (Natural Language Generation)",
      "Evolutionary Eras: Symbolic (Chomsky), Statistical (Manning/Jurafsky), Neural (Mikolov/Bengio), Foundation LLMs (Vaswani/OpenAI)"
    ],
    deepDiveText: `
### 1. The Multi-Tiered Architecture of Human Language

Human language is an evolved, semi-structured, highly dynamic symbolic communication system. Unlike formal programming languages (such as Python or C++) which possess deterministic context-free grammars and unambiguous semantics, human natural language operates across six interconnected hierarchical linguistic layers:

1. **Phonetics & Phonology**: The physical transmission and acoustic properties of speech sounds (phones and phonemes). In text processing, this surfaces as phonetic similarities (e.g., soundex, metaphone algorithms used in fuzzy string matching).
2. **Morphology**: The internal structural construction of words from smaller units called **morphemes** (free roots and bound affixes like prefixes and suffixes).
3. **Syntax**: The structural arrangement and grammatical governing rules that dictate how tokens assemble into well-formed phrases, clauses, and sentences.
4. **Semantics**: The literal, denotative truth-conditional meaning of words, compound expressions, and complete compositional sentences independent of context.
5. **Pragmatics**: How real-world situational context, speaker intentions, social conventions, implicit assumptions, and world knowledge alter meaning beyond literal semantics.
6. **Discourse**: Linguistic meaning that spans across multiple connected sentences, including coreference resolution, anaphora, discourse markers, and conversational flow.

### 2. The Four Pillars of Linguistic Ambiguity

The core challenge that distinguishes NLP from deterministic compiler design is pervasive **ambiguity**:

* **Lexical Ambiguity**: A single word token possesses multiple distinct meanings depending on context (polysemy and homonymy).
  * *Example*: "The fisherman went to the **bank**" (river embankment) vs. "The depositor put money into the **bank**" (financial institution).
* **Syntactic (Structural) Ambiguity**: A single sentence admits multiple valid grammatical parse trees depending on prepositional phrase attachment.
  * *Example*: "I saw the man with the telescope." (Did I use a telescope to see him, or was the man holding a telescope?)
* **Semantic Ambiguity**: Ambiguity in scope or quantifier interpretation within logical composition.
  * *Example*: "Every engineer loves a programming language." (Do they all love the *same* language, or does each have their own favorite?)
* **Pragmatic & Figurative Ambiguity**: Irony, sarcasm, metaphors, and indirect speech acts where literal interpretation contradicts intended meaning.
  * *Example*: "Oh great, another production outage on Friday evening!" (Literal: celebration; Pragmatic: severe frustration).

### 3. Dissecting the Computational Spectrum: NLP, NLU, and NLG

* **Natural Language Processing (NLP)**: The overarching umbrella domain encompassing all computational techniques that process, analyze, translate, and synthesize natural text and speech.
* **Natural Language Understanding (NLU)**: The challenging subset focused on semantic comprehension, syntactic parsing, intent classification, and entity extraction. NLU transforms unstructured human tokens into machine-readable structured representations (e.g., SQL queries, API payloads, knowledge graph triples).
* **Natural Language Generation (NLG)**: The inverse discipline: converting internal data structures, knowledge representations, or context prompts into fluent, grammatically coherent, human-readable natural language text.
    `,
    codeSnippet: `# Linguistic Ambiguity Demonstration with NLTK & spaCy
import nltk
from nltk import pos_tag, word_tokenize

sentence_1 = "The bank of the river was overflowing with water."
sentence_2 = "He deposited funds at the central commercial bank."

tokens_1 = word_tokenize(sentence_1)
tokens_2 = word_tokenize(sentence_2)

# Notice how POS tags alone cannot differentiate word senses:
print("Sentence 1 POS:", [f"{tok}/{tag}" for tok, tag in pos_tag(tokens_1) if tok == "bank"])
print("Sentence 2 POS:", [f"{tok}/{tag}" for tok, tag in pos_tag(tokens_2) if tok == "bank"])
# Both yield NN (Noun), requiring Lesk semantic sense disambiguation or contextual embeddings!`,
    challenges: [
      "Why does a standard Context-Free Grammar (CFG) struggle to parse conversational social media text?",
      "Differentiate homonyms, homophones, and polysemous words with two concrete engineering examples each.",
      "How do modern Transformer models (e.g. BERT) resolve lexical ambiguity compared to static Word2Vec vectors?"
    ]
  },
  {
    id: "unit-02",
    part: "Part I: Foundations of Natural Language Processing",
    partNumber: 1,
    unitNumber: 2,
    title: "Linguistic Foundations: Morphology, Syntax, and Semantics",
    duration: "4.0 Hours",
    level: "Intermediate",
    summary:
      "Mathematical and formal linguistics for engineers: morpheme decomposition, inflectional vs derivational morphology, constituency vs dependency grammar parsing, lexical relations in WordNet, and frame semantics.",
    coreConcepts: [
      "Morphemic Analysis: Root Stems, Bound Morphemes, Inflectional vs. Derivational Affixes",
      "Constituency Parsing (Chomsky Normal Form, Context-Free Grammars)",
      "Dependency Parsing: Typed Head-Dependent Relations and Projectivity",
      "Lexical Semantics: Synsets, Hypernyms, Hyponyms, Meronyms, and WordNet Path Distances"
    ],
    deepDiveText: `
### 1. Morphological Decomposition

Words are not indivisible atoms; they are constructed from **morphemes** (the minimal information-bearing linguistic units):
* **Free Morphemes**: Can occur independently as standalone words (e.g., \`lead\`, \`build\`, \`system\`).
* **Bound Morphemes**: Must attach to a stem as an affix:
  * **Inflectional Affixes**: Modify grammatical aspects (tense, number, person, case) without changing the syntactic category or core semantic meaning (e.g., \`train\` -> \`trains\`, \`trained\`, \`training\`).
  * **Derivational Affixes**: Create completely new words or shift syntactic word classes (e.g., \`compute\` [verb] -> \`computer\` [noun] -> \`computational\` [adjective] -> \`computationally\` [adverb]).

### 2. Syntactic Structures: Constituency vs. Dependency

To parse sentences programmatically, computational linguistics utilizes two dominant paradigms:

1. **Constituency (Phrase Structure) Grammar**:
   Decomposes sentences hierarchically into nested constituent phrases according to production rules:
   S -> NP VP, NP -> Det Nom, VP -> Verb NP.
   This captures nested grouping but generates unwieldy parse trees for languages with flexible word orders.

2. **Dependency Grammar**:
   Models syntax directly through binary, directed, typed relations between word tokens without non-terminal phrase nodes:
   Head --[relation]--> Dependent.
   Every sentence has a single central **ROOT** (usually the main finite predicate verb). All other words depend directly or transitively on this root. For example, in *"The fast server crashed unexpectedly"*:
   * \`crashed\` = **ROOT**
   * \`crashed\` -> \`server\` (\`nsubj\`: nominal subject)
   * \`server\` -> \`The\` (\`det\`: determiner)
   * \`server\` -> \`fast\` (\`amod\`: adjectival modifier)
   * \`crashed\` -> \`unexpectedly\` (\`advmod\`: adverbial modifier)

### 3. Lexical Semantics & WordNet Ontologies

George Miller's **WordNet** organizes lexical concepts into **Synsets** (sets of cognitive synonyms). Relations between synsets construct a semantic directed acyclic graph:
* **Hypernymy** (IS-A superordinate): \`vehicle\` is a hypernym of \`car\`.
* **Hyponymy** (IS-A subordinate): \`convertible\` is a hyponym of \`car\`.
* **Meronymy** (PART-OF): \`engine\` and \`wheel\` are meronyms of \`car\`.
* **Holonymy** (WHOLE-CONTAINING): \`car\` is a holonym of \`transmission\`.
    `,
    codeSnippet: `# WordNet Semantic Path Distance & Synset Traversal
import nltk
from nltk.corpus import wordnet as wn

nltk.download('wordnet', quiet=True)

# Retrieve synsets for 'dog' and 'wolf'
dog_synset = wn.synset('dog.n.01')
wolf_synset = wn.synset('wolf.n.01')
computer_synset = wn.synset('computer.n.01')

# Calculate Wu-Palmer Semantic Similarity (based on lowest common subsumer depth)
sim_dog_wolf = dog_synset.wup_similarity(wolf_synset)
sim_dog_comp = dog_synset.wup_similarity(computer_synset)

print(f"Dog & Wolf Similarity: {sim_dog_wolf:.4f}")      # High: ~0.90
print(f"Dog & Computer Similarity: {sim_dog_comp:.4f}")  # Low: ~0.20
print("Dog Hypernym Hierarchy:", [h.name() for h in dog_synset.hypernym_paths()[0][-5:]])`,
    challenges: [
      "Prove why dependency trees are more computationally efficient (O(n) with transition-based parsers) than CYK constituency parsing (O(n^3)).",
      "Construct the typed dependency graph for the sentence: 'The senior engineer quickly fixed the race condition in the database.'",
      "What are the primary limitations of handcrafted ontologies like WordNet in modern machine learning workflows?"
    ]
  },
  {
    id: "unit-03",
    part: "Part II: Text Preprocessing, Tokenization, and Linguistic Analysis",
    partNumber: 2,
    unitNumber: 3,
    title: "Production Text Preprocessing & Cleaning Pipelines",
    duration: "4.5 Hours",
    level: "Intermediate",
    summary:
      "End-to-end engineering of resilient text normalization pipelines: regular expressions, unicode normalization (NFC/NFKD), HTML/URL stripping, contraction expansion, casing strategies, and context-preserving negation handling.",
    coreConcepts: [
      "Unicode Standards: ASCII vs UTF-8, Normalization Forms (NFC, NFD, NFKC, NFKD)",
      "Production Regex Compilation & Regex Denial of Service (ReDoS) Defense",
      "Negation Preservation Algorithms (Transforming 'not happy' into 'not_happy')",
      "Domain-Specific Cleaning for Social Media, Markdown, and Technical Transcripts"
    ],
    deepDiveText: `
### 1. Why Text Preprocessing Determines Downstream Accuracy

Raw unstructured text sourced from databases, web scrapers, APIs, and OCR engines is notoriously noisy: containing malformed HTML tags, unescaped escape sequences, unicode homoglyphs, emojis, contractions, and varied casing. In traditional machine learning and early neural NLP, vocabulary size directly governs memory consumption and model capacity (V * d). Injudicious preprocessing either causes extreme vocabulary explosion (10^6+ sparse unigrams) or catastrophic information erasure (stripping negation or domain acronyms).

### 2. Unicode Normalization Forms

Computers represent text via Unicode code points. Characters with diacritics can often be represented in two equivalent ways:
* **Precomposed Form (NFC - Canonical Composition)**: E.g., \`é\` represented as a single code point \`U+00E9\`.
* **Decomposed Form (NFD - Canonical Decomposition)**: E.g., \`e\` (\`U+0065\`) followed by combining acute accent \`´\` (\`U+0301\`).

Without unicode normalization, identical human words like \`café\` (NFC) and \`café\` (NFD) evaluate as different string hashes, fragmenting your tokenizer's vocabulary!

### 3. Preserving Critical Negation Semantics

A naive preprocessing step that strips punctuation and stop words destroys vital sentiment indicators:
* Input: *"This smartphone is not great, and never delivers good battery life."*
* Naive Stop Word Filter: \`['smartphone', 'great', 'delivers', 'good', 'battery', 'life']\`
* The resulting sentiment score becomes massively positive despite the review being scathing!

**The Production Negation Windowing Algorithm**:
Whenever a negation marker (e.g. \`not\`, \`never\`, \`no\`, \`hardly\`, \`scarcely\`) is encountered, append a \`NOT_\` prefix to all subsequent tokens until a clausal punctuation mark (\`.\`, \`,\`, \`;\`, \`!\`, \`?\`) or coordinating conjunction (\`but\`, \`however\`) is encountered.
    `,
    codeSnippet: `import re
import unicodedata

class ResilientTextPreprocessor:
    def __init__(self, preserve_negation=True):
        self.preserve_negation = preserve_negation
        self.url_pattern = re.compile(r'https?://\\S+|www\\.\\S+')
        self.html_pattern = re.compile(r'<.*?>')
        self.whitespace_pattern = re.compile(r'\\s+')
        self.negation_tokens = {'not', 'never', 'no', 'cannot', "n't"}
        self.clause_breakers = {'.', ',', ';', '!', '?', 'but', 'however'}

    def clean(self, text: str) -> str:
        # 1. Unicode NFKD normalization
        text = unicodedata.normalize('NFKD', text)
        # 2. Strip HTML tags and hyperlinks
        text = self.html_pattern.sub(' ', text)
        text = self.url_pattern.sub(' ', text)
        
        if not self.preserve_negation:
            # Simple alphanumeric cleaning
            text = re.sub(r'[^a-zA-Z0-9\\s]', ' ', text)
            return self.whitespace_pattern.sub(' ', text).strip().lower()
            
        # 3. Negation folding pipeline
        tokens = text.lower().split()
        processed_tokens = []
        is_negating = False
        
        for tok in tokens:
            clean_tok = re.sub(r'[^a-zA-Z0-9]', '', tok)
            if not clean_tok:
                continue
            if tok in self.negation_tokens or tok.endswith("n't"):
                is_negating = True
                processed_tokens.append(clean_tok)
            elif any(punct in tok for punct in self.clause_breakers):
                is_negating = False
                processed_tokens.append(clean_tok)
            else:
                processed_tokens.append(f"NOT_{clean_tok}" if is_negating else clean_tok)
                
        return ' '.join(processed_tokens)

# Demonstration:
processor = ResilientTextPreprocessor(preserve_negation=True)
sample = "<p>The phone was NOT good! However, the delivery was fast at https://example.com</p>"
print("Engineered Output:", processor.clean(sample))`,
    challenges: [
      "How would you prevent catastrophic backtracking in regular expressions (ReDoS) when processing user-submitted text in production?",
      "Why is converting uppercase acronyms like 'US' (United States) to lowercase 'us' dangerous in news classification?",
      "Design a pipeline rule that normalizes contraction pairs such as \"don't\" -> \"do not\" before tokenization."
    ]
  },
  {
    id: "unit-04",
    part: "Part II: Text Preprocessing, Tokenization, and Linguistic Analysis",
    partNumber: 2,
    unitNumber: 4,
    title: "Tokenization & Vocabulary Management: From Words to Subwords",
    duration: "4.5 Hours",
    level: "Intermediate",
    summary:
      "The engineering mathematics of tokenization: word-level, character-level, and modern subword algorithms (Byte Pair Encoding, WordPiece, Unigram). Managing vocabulary capacity, OOV tokens, special tokens, padding, and truncation.",
    coreConcepts: [
      "The Tokenization Dilemma: Word-level Sparsity vs Character-level Sequence Bloat",
      "Byte Pair Encoding (BPE) Iterative Pair Frequency Compression",
      "WordPiece (Maximum Likelihood Language Model Merges) used in BERT",
      "Special Control Tokens: [CLS], [SEP], [PAD], [UNK], [MASK], and Dynamic Attention Masks"
    ],
    deepDiveText: `
### 1. The Tokenization Spectrum

A machine learning model cannot directly process text strings; it operates on tensors of numbers. **Tokenization** maps raw text into discrete numeric token IDs.

1. **Word-Level Tokenization**: Splits on whitespace and punctuation.
   * *Problem*: Suffers from out-of-vocabulary (OOV) words when unknown words appear at test time. Creating an exhaustive dictionary yields vocabulary sizes V > 500,000, resulting in unwieldy embedding matrices.
2. **Character-Level Tokenization**: Decomposes text into individual characters (V approx 256).
   * *Problem*: Solves OOV, but sequence lengths multiply by 5-10x, exploding the quadratic self-attention memory cost O(L^2) in sequence models. Characters individually carry very weak semantic signals.
3. **Subword Tokenization (Industry Standard)**:
   Splits frequent words into whole tokens and rare/morphologically complex words into shared subword fragments (e.g. \`unconditionally\` -> \`["un", "condition", "al", "ly"]\`). Solves OOV while maintaining bounded vocabulary sizes (V approx 30,000 - 50,000).

### 2. Byte Pair Encoding (BPE) Algorithm

Originally a data compression technique (Gage, 1994), Sennrich et al. (2016) adapted BPE for subword segmentation:
1. Initialize the vocabulary with all unique individual characters in the training corpus plus an end-of-word marker \`</w>\`.
2. Segment every word in the training corpus into characters.
3. Count the frequency of all adjacent token pairs across the corpus.
4. Merge the most frequent adjacent pair into a new subword token, adding it to the vocabulary.
5. Repeat steps 3-4 for a preset number of merge operations K until target vocabulary size |V| is achieved.

Score(t_i, t_{i+1}) = Frequency(t_i, t_{i+1})

### 3. WordPiece & Special Tokens

* **WordPiece (used by BERT)**: Merges the pair that maximizes the likelihood of the language model over the training corpus:
  Score(u, v) = Count(uv) / (Count(u) * Count(v))
* **Special Tokens**:
  * \`[PAD]\` (ID 0): Fills variable-length sentences to fixed batch length L.
  * \`[UNK]\`: Fallback for any token absent from the subword vocabulary.
  * \`[CLS]\`: Prepend symbol whose final hidden state is utilized for sequence classification.
  * \`[SEP]\`: Delimiter separating sentence pairs in NLI or QA tasks.
    `,
    codeSnippet: `# Minimal Algorithmic Implementation of Byte Pair Encoding (BPE)
from collections import Counter, defaultdict

def get_stats(vocab):
    pairs = defaultdict(int)
    for word, freq in vocab.items():
        symbols = word.split()
        for i in range(len(symbols) - 1):
            pairs[symbols[i], symbols[i+1]] += freq
    return pairs

def merge_vocab(pair, v_in):
    v_out = {}
    bigram = ' '.join(pair)
    replacement = ''.join(pair)
    for word in v_in:
        w_out = word.replace(bigram, replacement)
        v_out[w_out] = v_in[word]
    return v_out

# Toy corpus vocabulary (word: frequency)
corpus_vocab = {
    'l o w </w>': 5,
    'l o w e r </w>': 2,
    'n e w e s t </w>': 6,
    'w i d e s t </w>': 3
}

num_merges = 6
for step in range(num_merges):
    pairs = get_stats(corpus_vocab)
    if not pairs:
        break
    best_pair = max(pairs, key=pairs.get)
    corpus_vocab = merge_vocab(best_pair, corpus_vocab)
    print(f"Step {step+1}: Merged '{best_pair[0]}' + '{best_pair[1]}' (Frequency: {pairs[best_pair]})")

print("\\nFinal Compact Vocabulary Representation:")
for k, v in corpus_vocab.items():
    print(f"  {k}: {v}")`,
    challenges: [
      "Why does GPT-4 utilize Byte-level BPE (BBPE) instead of character-level BPE?",
      "Explain the exact difference in behavior between WordPiece prefix markers (e.g. '##ing') and SentencePiece underscore markers (e.g. ' ing').",
      "Given a sequence tensor of shape (batch_size=4, max_len=128), how does a PyTorch model use the attention_mask tensor to ignore [PAD] tokens?"
    ]
  },
  {
    id: "unit-05",
    part: "Part II: Text Preprocessing, Tokenization, and Linguistic Analysis",
    partNumber: 2,
    unitNumber: 5,
    title: "Text Normalization: Stemming vs. Lemmatization and Stopwords",
    duration: "3.5 Hours",
    level: "Intermediate",
    summary:
      "Algorithmic comparison of rule-based Stemming (Porter, Snowball) vs dictionary/morphology-based Lemmatization (WordNet, spaCy). Mathematical error modes (over-stemming vs under-stemming) and stopword trade-offs in search vs deep learning.",
    coreConcepts: [
      "Stemming: Porter Stemmer Cascading Heuristic Rules & Suffix Stripping",
      "Over-Stemming (False Positives) vs. Under-Stemming (False Negatives)",
      "Lemmatization: Morphological Parsing with Contextual Part-of-Speech Constraints",
      "Stop Word Trade-Offs: TF-IDF Retrieval Optimization vs BERT Contextual Invalidation"
    ],
    deepDiveText: `
### 1. The Core Distinction: Stemming vs. Lemmatization

Both techniques aim to reduce inflectional forms and derivations of words to a common base form to curb vocabulary sparsity:

* **Stemming**: Fast heuristic rule-based suffix clipping (e.g. Porter, Snowball). Often produces stems that are not valid dictionary words (e.g., \`univers\`).
* **Lemmatization**: Morphological dictionary analysis considering the word's syntactic category (POS tag). Outputs valid dictionary lemmas (e.g., \`universe\`).

### 2. Stemming Error Modes

* **Over-stemming**: When two words with completely distinct semantic meanings are incorrectly conflated to the exact same stem:
  * E.g., \`universal\`, \`universe\`, and \`university\` all collapsed to \`univers\` by the Porter stemmer.
  * E.g., \`policy\` and \`police\` collapsed to \`polic\`.
* **Under-stemming**: When words that share a direct morphological root are failingly reduced to different stems:
  * E.g., \`adhesion\` -> \`adhes\`, while \`adhesive\` -> \`adhesiv\`.

### 3. Lemmatization with Part-of-Speech Guidance

Lemmatization requires the word's syntactic category (POS tag) to correctly ascertain its canonical lemma:
* Input: *"The leaves are falling."* -> \`leaves\` (NOUN) -> Lemma: \`leaf\`
* Input: *"The train leaves at 5 PM."* -> \`leaves\` (VERB) -> Lemma: \`leave\`
    `,
    codeSnippet: `# Side-by-Side Benchmark: Porter Stemmer vs. WordNet Lemmatizer
from nltk.stem import PorterStemmer, WordNetLemmatizer
from nltk.corpus import wordnet

stemmer = PorterStemmer()
lemmatizer = WordNetLemmatizer()

words = ["running", "ran", "runs", "better", "cacti", "corpora", "meeting", "university"]

print(f"{'Original':<12} | {'Porter Stemmer':<15} | {'WordNet Lemma (Default)':<25} | {'POS-Aware Lemma':<15}")
print("-" * 75)

for word in words:
    stem = stemmer.stem(word)
    lemma_default = lemmatizer.lemmatize(word)
    pos = wordnet.VERB if word in ["running", "ran", "runs"] else (wordnet.ADJ if word == "better" else wordnet.NOUN)
    lemma_pos = lemmatizer.lemmatize(word, pos=pos)
    print(f"{word:<12} | {stem:<15} | {lemma_default:<25} | {lemma_pos:<15}")`,
    challenges: [
      "In what production scenario would applying stop word removal decrease downstream classifier performance?",
      "Why is stemming virtually never applied prior to fine-tuning modern Transformer models like RoBERTa or T5?",
      "Demonstrate why Lemmatization must be performed AFTER tokenization and Part-of-Speech tagging."
    ]
  },
  {
    id: "unit-06",
    part: "Part II: Text Preprocessing, Tokenization, and Linguistic Analysis",
    partNumber: 2,
    unitNumber: 6,
    title: "Part-of-Speech (POS) Tagging, NER, and Syntactic Dependency Parsing",
    duration: "4.5 Hours",
    level: "Intermediate",
    summary:
      "Deep linguistic annotation engineering using spaCy: POS taggers (Penn Treebank tagset), Named Entity Recognition (NER with BIO/IOB format and span evaluation), and typed syntactic dependency parsing for relation extraction.",
    coreConcepts: [
      "Penn Treebank Universal Tagset (NN, NNP, VBZ, JJ, RB, IN, DT)",
      "Named Entity Recognition: Sequence Labeling with BIO (Begin, Inside, Outside) Tags",
      "Evaluating NER: Micro vs Macro Span F1 Score and Exact vs Partial Match",
      "Dependency Parsing for Information Extraction (Subject-Verb-Object Triple Mining)"
    ],
    deepDiveText: `
### 1. Part-of-Speech (POS) Tagging

POS tagging annotates each token in a sentence with its morphosyntactic grammatical category based on both its definition and surrounding contextual window:
* \`NNP\`: Proper noun, singular (\`Google\`, \`London\`)
* \`NN\`: Common noun, singular (\`server\`, \`latency\`)
* \`VBZ\`: Verb, 3rd person singular present (\`handles\`, \`computes\`)
* \`JJ\`: Adjective (\`distributed\`, \`scalable\`)
* \`RB\`: Adverb (\`rapidly\`, \`concurrently\`)

### 2. Named Entity Recognition (NER) & The BIO Scheme

NER identifies spans of text representing real-world named entities (Persons, Organizations, Locations, Monetary amounts, Timestamps, Products).
Because an entity frequently spans multiple consecutive tokens (e.g., *"San Francisco International Airport"*), sequence labelers use the **BIO scheme**:
* \`B-LOC\`: Begin of a Location entity span (\`San\`)
* \`I-LOC\`: Inside of a Location entity span (\`Francisco\`, \`International\`, \`Airport\`)
* \`O\`: Outside of any named entity (\`is\`, \`a\`, \`busy\`, \`hub\`)

### 3. Subject-Verb-Object (SVO) Extraction via Dependency Trees

Rather than relying on brittle regex to mine facts from unstructured text, production information extraction navigates the spaCy dependency tree. By locating the ROOT verb and its associated nominal subject (\`nsubj\`) and direct object (\`dobj\`), we can automatically construct structured knowledge triples:
<Subject, Predicate, Object>
    `,
    codeSnippet: `# Production Knowledge Triple (SVO) Extraction using spaCy
import spacy

nlp = spacy.load("en_core_web_sm")
text = "Anthropic developed Claude to assist engineers with complex technical workflows."
doc = nlp(text)

print("=== Named Entities ===")
for ent in doc.ents:
    print(f"Entity: '{ent.text}' | Label: {ent.label_} ({spacy.explain(ent.label_)})")

def extract_svo(sentence):
    svo_triples = []
    for token in sentence:
        if token.pos_ == "VERB":
            subjects = [w.text for w in token.lefts if w.dep_ in ("nsubj", "nsubjpass")]
            objects = [w.text for w in token.rights if w.dep_ in ("dobj", "pobj")]
            for subj in subjects:
                for obj in objects:
                    svo_triples.append((subj, token.lemma_, obj))
    return svo_triples

print("\\n=== Extracted SVO Triples ===")
print(extract_svo(doc))`,
    challenges: [
      "Why is token-level accuracy misleading for evaluating NER models on imbalanced text corpora?",
      "Calculate the entity-level Precision and Recall given: True Spans: {('Apple', 'ORG', 0, 1), ('Tim Cook', 'PER', 3, 5)}, Predicted Spans: {('Apple', 'ORG', 0, 1), ('Cook', 'PER', 4, 5)}.",
      "How does a transition-based parser maintain state using a Stack, Buffer, and set of Dependency Arcs?"
    ]
  },
  {
    id: "unit-07",
    part: "Part III: Text Representation, Vector Spaces, and Embeddings",
    partNumber: 3,
    unitNumber: 7,
    title: "Classical Text Representation: Bag of Words, N-Grams, and TF-IDF",
    duration: "4.5 Hours",
    level: "Intermediate",
    summary:
      "Mathematical foundation of statistical vector space models: One-Hot limitations, Bag-of-Words, multi-word N-Grams, TF-IDF derivation (sublinear TF, smooth IDF), document cosine similarity, and sparsity optimizations.",
    coreConcepts: [
      "The Limits of One-Hot Vectors: Orthogonality, High Dimensionality, and Zero Semantics",
      "Bag-of-Words (BoW) Count Matrices and Document-Term Sparsity",
      "N-Grams: Preserving Local Context at the Cost of Exponential Feature Growth",
      "TF-IDF Formulation: Term Frequency, Inverse Document Frequency, and L2 Normalization"
    ],
    deepDiveText: `
### 1. The Vector Space Representation Paradigm

To feed natural language into statistical models, documents must be mapped into numerical vectors in a shared metric space R^{|V|}.

* **One-Hot Encoding**: A vector of size |V| with a single 1 at the token's dictionary index and 0 elsewhere.
  * **Critical Flaw**: All one-hot vectors are completely orthogonal (dot product is zero). The model has zero intrinsic understanding that "cat" and "feline" are semantically identical!

### 2. Bag-of-Words (BoW) & N-Grams

* **Bag-of-Words**: Represents a document as a histogram vector of word frequencies, discarding grammatical syntax and word order.
* **N-Grams**: Contiguous sequences of n items from a given text (unigrams, bigrams, trigrams). Bigrams preserve local collocations like "not guilty", but vocabulary dimensionality grows exponentially.

### 3. Term Frequency-Inverse Document Frequency (TF-IDF)

Raw term count biases models toward frequent words ("the", "is", "system") that convey little discriminating information. **TF-IDF** assigns high weight to terms that appear frequently in a specific document but rarely across the entire corpus:

TF-IDF(t, d, D) = TF(t, d) * IDF(t, D)

1. **Term Frequency (Sublinear Scaling)**:
   TF(t, d) = 1 + log(1 + f_{t, d})
2. **Inverse Document Frequency (Smoothed)**:
   IDF(t, D) = log((1 + |D|) / (1 + |{d in D : t in d}|)) + 1
3. **L2 Cosine Normalization**:
   v_d = v_d / ||v_d||_2
   This ensures document length does not distort semantic similarity calculations.
    `,
    codeSnippet: `# Scikit-Learn TF-IDF Vectorizer with Sublinear Scaling & Cosine Search
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

corpus = [
    "High performance distributed key value storage engine using Raft consensus.",
    "PostgreSQL relational database with ACID transactions and B-Tree indexing.",
    "Distributed database clustering with Raft consensus and high availability.",
    "Modern frontend user interface built with React, Vite, and Tailwind CSS."
]

vectorizer = TfidfVectorizer(ngram_range=(1, 2), sublinear_tf=True, stop_words="english")
tfidf_matrix = vectorizer.fit_transform(corpus)
print(f"Corpus Matrix Shape (Docs x Features): {tfidf_matrix.shape}")

query = ["distributed Raft consensus engine"]
query_vec = vectorizer.transform(query)
scores = cosine_similarity(query_vec, tfidf_matrix).flatten()

for rank, idx in enumerate(np.argsort(scores)[::-1]):
    print(f"Rank {rank+1} [Score: {scores[idx]:.4f}]: {corpus[idx]}")`,
    challenges: [
      "Prove why adding 1 to the numerator and denominator in the smooth IDF formula prevents division by zero.",
      "Given a corpus of 10,000 documents where the word 'database' appears in 100 documents and 5 times in Document A, calculate its exact TF-IDF score.",
      "Why is a TF-IDF sparse matrix significantly more memory efficient than a dense NumPy array for large document collections?"
    ]
  },
  {
    id: "unit-08",
    part: "Part III: Text Representation, Vector Spaces, and Embeddings",
    partNumber: 3,
    unitNumber: 8,
    title: "Distributed Word Embeddings: Word2Vec, GloVe, and FastText",
    duration: "5.0 Hours",
    level: "Advanced",
    summary:
      "The neural embedding revolution: Harris's Distributional Hypothesis, Word2Vec architectures (CBOW vs Skip-Gram), Negative Sampling loss derivation, GloVe matrix factorization, FastText subword n-grams, and vector arithmetic analogies.",
    coreConcepts: [
      "The Distributional Hypothesis: 'You shall know a word by the company it keeps' (Firth, 1957)",
      "Continuous Bag-of-Words (CBOW) vs Continuous Skip-Gram Objective Formulations",
      "Negative Sampling (NEG) Formulation & Hierarchical Softmax Optimization",
      "Vector Arithmetic Semantics: King - Man + Woman = Queen"
    ],
    deepDiveText: `
### 1. The Distributional Hypothesis

Traditional sparse representations treat words as isolated categorical symbols. In contrast, **distributed representations** encode words as dense real-valued vectors v in R^d (d approx 100-300) where semantically similar words map to nearby geometric coordinates in vector space.

### 2. Word2Vec Architectures: CBOW vs. Skip-Gram

Introduced by Mikolov et al. at Google (2013):
1. **Continuous Bag-of-Words (CBOW)**:
   Predicts the target center word w_t given its surrounding context window words. Fast to train; smoother representations for frequent words.
2. **Continuous Skip-Gram**:
   Predicts the surrounding context words given the target center word w_t. Excels on rare words and smaller corpora.

### 3. The Softmax Bottleneck & Negative Sampling

The theoretical Softmax probability over a vocabulary V requires summing over all |V| approx 500,000 words for every single gradient update - an impossible O(|V|) barrier.

**Negative Sampling (SGNS)** reformulates the multi-class prediction problem as binary logistic regressions: distinguish the true target context word from K artificially sampled noise words:
Loss = log(sigmoid(v'_{w_O}^T v_{w_I})) + sum_{i=1}^K E[log(sigmoid(-v'_{w_i}^T v_{w_I}))]

### 4. GloVe & FastText Innovations

* **GloVe (Stanford 2014)**: Combines global matrix factorization with local context windows by fitting log-bilinear dot products directly to global word co-occurrence ratios:
  w_i^T w~_j + b_i + b~_j = log(X_{ij})
* **FastText (Facebook 2016)**: Represents each word as the sum of its character n-gram vectors (e.g. \`where\` = \`<wh\`, \`whe\`, \`her\`, \`ere\`, \`re>\`). FastText can generate accurate embeddings for unseen OOV words!
    `,
    codeSnippet: `# Vector Semantic Arithmetic Simulation
import numpy as np

def simulate_word_vector_analogy(vectors):
    # King - Man + Woman ~= Queen
    v_king = vectors['king']
    v_man = vectors['man']
    v_woman = vectors['woman']
    
    target_vec = v_king - v_man + v_woman
    
    best_word = None
    best_sim = -1.0
    for word, vec in vectors.items():
        if word in ('king', 'man', 'woman'):
            continue
        sim = np.dot(target_vec, vec) / (np.linalg.norm(target_vec) * np.linalg.norm(vec))
        if sim > best_sim:
            best_sim = sim
            best_word = word
            
    return best_word, best_sim

print("Semantic Vector Properties:")
print("1. Linear Substructures (Paris - France + Italy = Rome)")
print("2. Grammatical Tenses (walking - walk + swim = swimming)")
print("3. Dense Low-Dimensional Space (100-300 dims vs 500k sparse one-hot)")`,
    challenges: [
      "Derive the gradient of the Negative Sampling loss function with respect to the input word vector v_{w_I}.",
      "Why does GloVe use a weighting function on co-occurrence counts to cap high-frequency words?",
      "Why cannot Word2Vec distinguish between antonyms like 'hot' and 'cold' or 'good' and 'bad'?"
    ]
  },
  {
    id: "unit-09",
    part: "Part IV: Sequence Modeling, Deep Learning, and Attention",
    partNumber: 4,
    unitNumber: 9,
    title: "Sequential Deep Learning: RNNs, LSTMs, GRUs, and Attention Intuition",
    duration: "5.5 Hours",
    level: "Advanced",
    summary:
      "Mathematical architectures for temporal natural language sequences: Vanilla RNN recurrence equations, vanishing/exploding gradients through time (BPTT), LSTM gating mechanisms (Forget, Input, Candidate, Output), GRUs, Bidirectional LSTMs, and the intuition of scaled dot-product attention.",
    coreConcepts: [
      "Sequential Language Modeling & Joint Probability Chain Rule",
      "Vanilla RNN State Recurrence: Hidden State Updates and Gradient Decay",
      "LSTM Architecture: Additive Cell State Highway (C_t) & Multiplicative Gating",
      "Bidirectional LSTMs (BiLSTM) & Scaled Dot-Product Attention: Softmax(QK^T / sqrt(d_k))V"
    ],
    deepDiveText: `
### 1. Language Modeling as Sequence Probability

A statistical language model assigns a joint probability to any sequence of T words using the conditional probability chain rule:
P(w_1, w_2, ..., w_T) = product_{t=1}^T P(w_t | w_1, ..., w_{t-1})

### 2. Recurrent Neural Networks (RNN) & Backpropagation Through Time

A vanilla RNN processes inputs sequentially, updating a recurring hidden memory vector h_t in R^d:
h_t = tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)

**The Vanishing Gradient Catastrophe**:
When computing gradients across T time steps via BPTT, the chain rule involves repeated multiplications of the transition matrix W_{hh}^T. If the largest eigenvalue lambda_max(W_{hh}) < 1, the gradient decays exponentially toward zero as T grows, preventing the model from learning dependencies beyond 10-15 tokens!

### 3. Long Short-Term Memory (LSTM) Networks

Hochreiter & Schmidhuber (1997) solved vanishing gradients by introducing an **additive cell state** C_t governed by three non-linear gates:
1. **Forget Gate f_t**: Decides what percentage of old cell memory to discard:
   f_t = sigmoid(W_f [h_{t-1}, x_t] + b_f)
2. **Input Gate i_t & Candidate C~_t**: Decides what new information to store:
   i_t = sigmoid(W_i [h_{t-1}, x_t] + b_i)
   C~_t = tanh(W_c [h_{t-1}, x_t] + b_c)
3. **Cell State Update**: Linear addition prevents gradient collapse:
   C_t = f_t * C_{t-1} + i_t * C~_t
4. **Output Gate o_t & Hidden State**:
   o_t = sigmoid(W_o [h_{t-1}, x_t] + b_o)
   h_t = o_t * tanh(C_t)

### 4. Attention Mechanism Intuition

Compressing a long 100-word sentence into a single fixed vector causes an information bottleneck.
**Attention** (Bahdanau et al., 2014; Vaswani et al., 2017) allows the model to dynamically query and weight all intermediate encoder hidden states:
Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V
    `,
    codeSnippet: `# PyTorch Bidirectional LSTM (BiLSTM) for Text Classification
import torch
import torch.nn as nn

class BiLSTMSentimentClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes, dropout=0.3):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim, padding_idx=0)
        self.lstm = nn.LSTM(
            input_size=embed_dim,
            hidden_size=hidden_dim,
            num_layers=2,
            batch_first=True,
            bidirectional=True,
            dropout=dropout
        )
        self.dropout = nn.Dropout(dropout)
        self.fc = nn.Linear(hidden_dim * 2, num_classes)

    def forward(self, text_tokens):
        # text_tokens: [batch_size, seq_len]
        embedded = self.dropout(self.embedding(text_tokens))
        lstm_out, (h_n, c_n) = self.lstm(embedded)
        # Global max-pooling across sequence length
        pooled, _ = torch.max(lstm_out, dim=1)
        logits = self.fc(self.dropout(pooled))
        return logits

model = BiLSTMSentimentClassifier(vocab_size=20000, embed_dim=128, hidden_dim=64, num_classes=3)
sample_batch = torch.randint(0, 20000, (8, 32))
output = model(sample_batch)
print(f"Logits Batch Output Tensor Shape: {output.shape}")`,
    challenges: [
      "Prove why the additive update rule C_t = f_t * C_{t-1} + i_t * C~_t allows gradients to flow backwards through time without exponential decay.",
      "Compare the computational efficiency and parameter count of a GRU vs. an LSTM layer with identical hidden state dimensions.",
      "Explain the exact role of the sqrt(d_k) scaling factor in Scaled Dot-Product Attention."
    ]
  },
  {
    id: "unit-10",
    part: "Part IV: Sequence Modeling, Deep Learning, and Attention",
    partNumber: 4,
    unitNumber: 10,
    title: "Production NLP Pipeline Engineering, Evaluation, and Deployment",
    duration: "4.5 Hours",
    level: "Advanced",
    summary:
      "Enterprise software engineering lifecycle for NLP models: data hygiene, leakage-free cross-validation, comprehensive evaluation metrics (Macro vs Micro F1, Confusion Matrices, Slice Testing), latency profiling, ONNX runtime export, and inference serving.",
    coreConcepts: [
      "Data Leakage Prevention: Fitting Tokenizers/Vectorizers Strictly on Train Splits",
      "Metric Selection: Imbalanced Classes, Macro F1, Micro F1, and Weighted F1",
      "Slice-Based Testing & Behavioral Invariance (CheckList Framework)",
      "Production Inference Optimization: Dynamic Batching, ONNX Runtime, and Quantization"
    ],
    deepDiveText: `
### 1. Data Leakage in NLP Workflows

A critical flaw in junior NLP engineering is executing vectorizer fitting, TF-IDF calculation, or vocabulary building on the entire dataset *before* train-test splitting.
* **The Failure Mode**: The vocabulary and IDF weights contain information about tokens and frequencies found exclusively in the test set. The validation metrics will be artificially inflated, failing catastrophically in production!
* **Rule**: Split raw data **first**. Call \`fit_transform()\` solely on the training partition, and \`transform()\` on validation and test partitions.

### 2. Comprehensive Evaluation for Skewed Distributions

Accuracy is completely invalid for real-world NLP problems with imbalanced labels (e.g. 98% spam-negative vs 2% phishing).
* **Precision**: When the model predicts positive, how often is it correct? (TP / (TP + FP))
* **Recall**: What fraction of actual positive examples did the model recover? (TP / (TP + FN))
* **F1-Score**: Harmonic mean penalizing extreme divergence:
  F1 = 2 * (Precision * Recall) / (Precision + Recall)
* **Averaging Strategies**:
  * **Macro-Averaged F1**: Calculates F1 independently for each class and averages them equally. Heavily penalizes models that fail on rare minority classes.
  * **Micro-Averaged F1**: Pools global TP, FP, FN across all classes. Dominated by frequent majority classes.

### 3. Production Deployment & Model Export

Deploying raw PyTorch models with standard Python interpreters introduces substantial overhead and GIL contention. Production pipelines export trained models to **ONNX (Open Neural Network Exchange)** with 8-bit dynamic quantization:
* **Quantization**: Compresses 32-bit floating point weights (\`FP32\`) to 8-bit integers (\`INT8\`), slashing memory footprint by 4x and reducing CPU inference latency by 2.5-3x with <0.5% loss in F1 score.
    `,
    codeSnippet: `# Production Evaluation Report & Leakage-Free Pipeline Construction
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

texts = ["Great battery life", "Horrible broken screen", "Fast shipping recommended", "Terrible customer support"] * 50
labels = [1, 0, 1, 0] * 50

# 1. Split strictly before vectorization
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2, random_state=42, stratify=labels)

# 2. Fit vectorizer strictly on training data
vectorizer = TfidfVectorizer(ngram_range=(1, 2), min_df=2)
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test) # Transform only!

# 3. Fit classifier and evaluate
model = LogisticRegression()
model.fit(X_train_vec, y_train)
y_pred = model.predict(X_test_vec)

print("Classification Report:")
print(classification_report(y_test, y_pred, target_names=["Negative", "Positive"]))`,
    challenges: [
      "Why is Macro-F1 preferred over Micro-F1 for multi-class classification with class imbalance?",
      "Design a test suite using Ribeiro's CheckList framework testing: Minimum Functionality, Directional Invariance, and Non-Deterministic Robustness.",
      "Explain how dynamic batching in a Triton inference server amortizes GPU kernel launch overhead."
    ]
  }
];

export const NLP_LABS = [
  {
    id: "lab-01",
    labNumber: "01",
    title: "Production Text Preprocessing & Cleaning Engine",
    duration: "2.0 Hours",
    difficulty: "Beginner to Intermediate",
    tools: "Python 3.10+, re, unicodedata",
    objective: "Build an industrial-strength text cleaning engine that handles HTML tags, malformed URLs, emoji preservation, unicode normalization, and context-aware negation folding.",
    problemStatement:
      "Raw scraped review text contains noisy tags, unescaped characters, and critical negations. Build a modular preprocessor that outputs sanitized, standardized token strings ready for downstream modeling.",
    code: `import re
import unicodedata

class TextCleaningEngine:
    def __init__(self):
        self.html_cleaner = re.compile(r'<.*?>')
        self.url_cleaner = re.compile(r'https?://\\S+|www\\.\\S+')
        self.negation_words = {'not', 'never', 'no', 'hardly', 'scarcely', 'cannot'}
        self.punctuations = {'.', ',', ';', '!', '?'}

    def process(self, text: str) -> str:
        text = unicodedata.normalize('NFKD', text)
        text = self.html_cleaner.sub(' ', text)
        text = self.url_cleaner.sub(' ', text)
        
        tokens = text.lower().split()
        output_tokens = []
        negating = False
        
        for tok in tokens:
            has_punct = any(p in tok for p in self.punctuations)
            cleaned = re.sub(r'[^a-zA-Z0-9]', '', tok)
            if not cleaned:
                continue
                
            if cleaned in self.negation_words or cleaned.endswith("nt"):
                negating = True
                output_tokens.append(cleaned)
            elif has_punct:
                output_tokens.append(f"NOT_{cleaned}" if negating else cleaned)
                negating = False
            else:
                output_tokens.append(f"NOT_{cleaned}" if negating else cleaned)
                
        return ' '.join(output_tokens)

engine = TextCleaningEngine()
sample = "<div>The device is NOT durable at all! However, screen resolution is great. See https://review.io</div>"
print("Cleaned Output:", engine.process(sample))`
  },
  {
    id: "lab-02",
    labNumber: "02",
    title: "Subword Tokenizer from Scratch (Byte Pair Encoding)",
    duration: "2.5 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, collections",
    objective: "Implement the complete Byte Pair Encoding (BPE) algorithm from first principles, training subword merge rules on a text corpus and tokenizing new sentences.",
    problemStatement:
      "Implement pair frequency statistics extraction, iterative merge execution, and the greedy tokenization inference algorithm using learned BPE merge tables.",
    code: `from collections import Counter, defaultdict

class BPETokenizer:
    def __init__(self, vocab_size=50):
        self.target_vocab_size = vocab_size
        self.merges = []
        self.vocab = set()

    def train(self, corpus):
        word_freqs = Counter()
        for doc in corpus:
            for word in doc.split():
                word_freqs[' '.join(list(word)) + ' </w>'] += 1
                
        for word in word_freqs:
            for char in word.split():
                self.vocab.add(char)
                
        while len(self.vocab) < self.target_vocab_size:
            pairs = defaultdict(int)
            for word, freq in word_freqs.items():
                symbols = word.split()
                for i in range(len(symbols) - 1):
                    pairs[symbols[i], symbols[i+1]] += freq
            if not pairs:
                break
            best_pair = max(pairs, key=pairs.get)
            self.merges.append(best_pair)
            self.vocab.add(''.join(best_pair))
            
            new_word_freqs = {}
            target_str = ' '.join(best_pair)
            replacement = ''.join(best_pair)
            for word, freq in word_freqs.items():
                new_w = word.replace(target_str, replacement)
                new_word_freqs[new_w] = freq
            word_freqs = new_word_freqs

    def tokenize(self, word):
        tokens = list(word) + ['</w>']
        for pair in self.merges:
            target = list(pair)
            i = 0
            while i < len(tokens) - 1:
                if tokens[i] == target[0] and tokens[i+1] == target[1]:
                    tokens[i] = ''.join(target)
                    del tokens[i+1]
                else:
                    i += 1
        return tokens

tokenizer = BPETokenizer(vocab_size=30)
corpus = ["low lower lowest", "new newer newest", "wide wider widest"]
tokenizer.train(corpus)
print("Learned Merges:", tokenizer.merges)
print("Tokenized 'lowest':", tokenizer.tokenize("lowest"))`
  },
  {
    id: "lab-03",
    labNumber: "03",
    title: "POS Tagging & Named Entity Recognition with spaCy",
    duration: "2.0 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, spaCy (en_core_web_sm)",
    objective: "Implement a linguistic extraction pipeline that performs morphological POS tagging, BIO entity extraction, and syntactic dependency visualization.",
    problemStatement:
      "Process financial and tech news articles to extract company names, monetary transaction values, and geographical headquarters using spaCy linguistic features.",
    code: `import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Microsoft agreed to acquire GitHub in San Francisco for $7.5 billion in stock.")

print(f"{'Token':<15} | {'POS':<6} | {'Tag':<6} | {'Dep':<10} | {'Head':<12}")
print("-" * 55)
for token in doc:
    print(f"{token.text:<15} | {token.pos_:<6} | {token.tag_:<6} | {token.dep_:<10} | {token.head.text:<12}")

print("\\n=== Extracted Entities ===")
for ent in doc.ents:
    print(f"Entity: {ent.text:<20} | Type: {ent.label_:<10} | Explain: {spacy.explain(ent.label_)}")`
  },
  {
    id: "lab-04",
    labNumber: "04",
    title: "TF-IDF Vectorizer & Text Search Engine",
    duration: "2.5 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, scikit-learn, numpy",
    objective: "Build an inverted index and cosine similarity search engine from scratch using sublinear TF-IDF weighting and sparse matrix linear algebra.",
    problemStatement:
      "Index a multi-document technical documentation corpus and retrieve top-k most relevant documents given natural language queries.",
    code: `import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

docs = [
    "Kubernetes container orchestration with horizontal pod autoscaling and etcd cluster state.",
    "PostgreSQL relational database with multi-version concurrency control and write ahead logging.",
    "Redis in-memory caching and message broker supporting pub-sub channels and cluster replication.",
    "Apache Kafka distributed streaming platform with partitioned commit logs and consumer groups."
]

vectorizer = TfidfVectorizer(ngram_range=(1, 2), sublinear_tf=True, stop_words="english")
doc_vectors = vectorizer.fit_transform(docs)

def search(query, top_k=2):
    q_vec = vectorizer.transform([query])
    sims = cosine_similarity(q_vec, doc_vectors).flatten()
    top_indices = np.argsort(sims)[::-1][:top_k]
    return [(docs[i], sims[i]) for i in top_indices]

results = search("distributed streaming log replication")
for doc, score in results:
    print(f"[Score: {score:.4f}] {doc}")`
  },
  {
    id: "lab-05",
    labNumber: "05",
    title: "Word2Vec Embeddings & Semantic Similarity Tool",
    duration: "2.5 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, gensim",
    objective: "Train a Continuous Skip-Gram Word2Vec model on custom domain corpora, inspect learned word embeddings, and test geometric vector analogies.",
    problemStatement:
      "Train word vectors on open-source software release notes, and demonstrate vector clustering between database terms, networking terms, and frontend frameworks.",
    code: `from gensim.models import Word2Vec

sentences = [
    ["postgresql", "mysql", "relational", "database", "sql", "tables"],
    ["redis", "memcached", "in-memory", "cache", "key-value", "database"],
    ["react", "vue", "angular", "frontend", "javascript", "components"],
    ["kubernetes", "docker", "containers", "orchestration", "pods", "cloud"],
    ["kafka", "rabbitmq", "pulsar", "messaging", "queues", "streaming"]
]

model = Word2Vec(sentences, vector_size=32, window=3, min_count=1, sg=1, epochs=100, seed=42)

sim = model.wv.similarity("postgresql", "mysql")
diff = model.wv.similarity("postgresql", "react")

print(f"Similarity (PostgreSQL <-> MySQL): {sim:.4f}")
print(f"Similarity (PostgreSQL <-> React): {diff:.4f}")
print("Words closest to 'database':", model.wv.most_similar("database", topn=3))`
  },
  {
    id: "lab-06",
    labNumber: "06",
    title: "Sentiment Analysis with Classical Machine Learning Baseline",
    duration: "2.5 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, scikit-learn",
    objective: "Build a rigorous baseline sentiment classifier using TF-IDF feature matrices, Logistic Regression, Hyperparameter Grid Search, and Stratified Cross-Validation.",
    problemStatement:
      "Train a high-throughput binary sentiment classifier and produce a complete classification report with ROC-AUC analysis.",
    code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

reviews = [
    "Amazing laptop with exceptional battery life and blazing fast processor",
    "Absolute trash, the device stopped working after two days",
    "Great display and sound quality, highly recommended for developers",
    "Customer service was terrible and refusal to refund broken hardware",
    "Fantastic value for money, lightweight and durable chassis",
    "Poor performance, lags continuously and overheats immediately"
] * 30

labels = [1, 0, 1, 0, 1, 0] * 30

X_train, X_test, y_train, y_test = train_test_split(reviews, labels, test_size=0.25, random_state=42, stratify=labels)

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(ngram_range=(1, 2), sublinear_tf=True)),
    ('clf', LogisticRegression(C=1.0))
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)
print(classification_report(y_test, y_pred, target_names=["Negative", "Positive"]))`
  },
  {
    id: "lab-07",
    labNumber: "07",
    title: "Sequence Classification with BiLSTM in PyTorch",
    duration: "3.5 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch 2.0+",
    objective: "Implement a deep Bidirectional LSTM classifier in PyTorch with embedding layers, spatial dropout, packed sequences, and training loops.",
    problemStatement:
      "Design a neural sequence model that encodes word context from both past and future directions to classify customer reviews into 3 sentiment classes.",
    code: `import torch
import torch.nn as nn

class BiLSTMSentiment(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes=3):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim, padding_idx=0)
        self.bilstm = nn.LSTM(embed_dim, hidden_dim, batch_first=True, bidirectional=True)
        self.classifier = nn.Sequential(
            nn.Dropout(0.3),
            nn.Linear(hidden_dim * 2, num_classes)
        )

    def forward(self, x):
        emb = self.embedding(x)
        out, (h_n, c_n) = self.bilstm(emb)
        pooled, _ = torch.max(out, dim=1)
        return self.classifier(pooled)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = BiLSTMSentiment(vocab_size=5000, embed_dim=64, hidden_dim=32).to(device)
dummy_batch = torch.randint(0, 5000, (4, 20)).to(device)
output = model(dummy_batch)
print("BiLSTM Logits Shape:", output.shape)`
  },
  {
    id: "lab-08",
    labNumber: "08",
    title: "Character-Level Language Modeling with RNN/LSTM",
    duration: "3.0 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch 2.0+",
    objective: "Implement a generative character-level LSTM language model in PyTorch that samples novel text given seed prompts with temperature control.",
    problemStatement:
      "Train an autoregressive model to predict the next character conditioned on historical characters, and generate coherent synthetic code strings.",
    code: `import torch
import torch.nn as nn

class CharLSTM(nn.Module):
    def __init__(self, vocab_size, hidden_dim=128):
        super().__init__()
        self.hidden_dim = hidden_dim
        self.embed = nn.Embedding(vocab_size, hidden_dim)
        self.lstm = nn.LSTM(hidden_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, vocab_size)

    def forward(self, x, state=None):
        emb = self.embed(x)
        out, state = self.lstm(emb, state)
        logits = self.fc(out)
        return logits, state

print("Character-level generative model initialized with temperature sampling.")`
  }
];

export const NLP_CAPSTONE = {
  title: "Capstone Project: Intelligent Customer Review Analysis System",
  duration: "15-20 Hours",
  difficulty: "University & Production Grade",
  overview:
    "An enterprise-scale, multi-component Natural Language Processing application engineered to ingest unstructured e-commerce and SaaS customer reviews, execute robust preprocessing with negation handling, perform multi-class sentiment classification with a PyTorch BiLSTM, extract fine-grained technical aspects and named entities using spaCy, surface high-impact key phrases using TF-IDF n-grams, and generate actionable executive alert summaries.",
  phases: [
    {
      name: "Phase 1: Architecture & Data Ingestion",
      details: "Design the end-to-end processing pipeline, ingest raw multi-sentence reviews with metadata, and establish schemas for review IDs, ratings, and raw text."
    },
    {
      name: "Phase 2: Resilient Preprocessing & Negation Folding",
      details: "Clean HTML, unescaped unicode, and format tags while applying the clausal negation algorithm ('not reliable' -> 'NOT_reliable') to safeguard sentiment signals."
    },
    {
      name: "Phase 3: Vocabulary & Custom Subword Tokenizer",
      details: "Construct the indexed vocabulary with frequency thresholds, padding, and truncation mechanisms, outputting PyTorch LongTensors."
    },
    {
      name: "Phase 4: Deep BiLSTM Sentiment Classifier in PyTorch",
      details: "Implement the two-layer Bidirectional LSTM model with embedding dropout, temporal max-pooling, and cross-entropy loss optimization."
    },
    {
      name: "Phase 5: Aspect & Entity Extraction with spaCy",
      details: "Mine technical domain aspects (Battery, Display, Customer Support, Shipping, Pricing) using dependency relation triples and named entity spans."
    },
    {
      name: "Phase 6: Salient Key Phrase Extraction",
      details: "Derive top discriminative n-grams via TF-IDF scoring to identify recurring defects and customer satisfaction drivers."
    },
    {
      name: "Phase 7: Executive Summary & Alert Dashboard",
      details: "Aggregate sentiment distribution, aspect-level polarity scores, and urgent red-flag alerts for critical defects."
    },
    {
      name: "Phase 8: Rigorous Evaluation & Error Analysis",
      details: "Evaluate against held-out reviews using Macro-F1, confusion matrix visualization, slice testing, and failure mode documentation."
    }
  ],
  runnableScript: `"""
================================================================================
PREPSPACES AI ENGINEERING - MODULE 05 CAPSTONE
Intelligent Customer Review Analysis System
Complete Production-Grade Pipeline (PyTorch + spaCy + Scikit-Learn)
================================================================================
"""

import re
import unicodedata
from collections import Counter
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
from sklearn.feature_extraction.text import TfidfVectorizer

# 1. TEXT PREPROCESSING & NEGATION ENGINE
class ReviewPreprocessor:
    def __init__(self):
        self.negation_words = {'not', 'never', 'no', 'hardly', 'scarcely', "n't"}
        self.clause_breakers = {'.', ',', ';', '!', '?', 'but', 'however'}

    def clean(self, text: str) -> str:
        text = unicodedata.normalize('NFKD', text)
        text = re.sub(r'<.*?>|https?://\\S+', ' ', text)
        tokens = text.lower().split()
        
        output = []
        is_negating = False
        for tok in tokens:
            clean_tok = re.sub(r'[^a-zA-Z0-9]', '', tok)
            if not clean_tok:
                continue
            if clean_tok in self.negation_words or tok.endswith("n't"):
                is_negating = True
                output.append(clean_tok)
            elif any(c in tok for c in self.clause_breakers):
                is_negating = False
                output.append(clean_tok)
            else:
                output.append(f"NOT_{clean_tok}" if is_negating else clean_tok)
        return ' '.join(output)

# 2. VOCABULARY BUILDER & DATASET
class ReviewVocabulary:
    def __init__(self, max_size=2000, min_freq=1):
        self.pad_token = "<PAD>"
        self.unk_token = "<UNK>"
        self.w2i = {self.pad_token: 0, self.unk_token: 1}
        self.i2w = {0: self.pad_token, 1: self.unk_token}
        self.max_size = max_size
        self.min_freq = min_freq

    def build_vocab(self, texts):
        counter = Counter()
        for t in texts:
            counter.update(t.split())
        for word, freq in counter.most_common(self.max_size - 2):
            if freq >= self.min_freq:
                idx = len(self.w2i)
                self.w2i[word] = idx
                self.i2w[idx] = word

    def encode(self, text: str, max_len=30):
        tokens = text.split()[:max_len]
        ids = [self.w2i.get(w, 1) for w in tokens]
        if len(ids) < max_len:
            ids += [0] * (max_len - len(ids))
        return ids

class ReviewDataset(Dataset):
    def __init__(self, texts, labels, vocab, max_len=30):
        self.X = [vocab.encode(t, max_len) for t in texts]
        self.y = labels

    def __len__(self):
        return len(self.X)

    def __getitem__(self, idx):
        return torch.tensor(self.X[idx], dtype=torch.long), torch.tensor(self.y[idx], dtype=torch.long)

# 3. PYTORCH BIDIRECTIONAL LSTM CLASSIFIER
class BiLSTMSentimentModel(nn.Module):
    def __init__(self, vocab_size, embed_dim=64, hidden_dim=48, num_classes=3):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim, padding_idx=0)
        self.lstm = nn.LSTM(
            input_size=embed_dim,
            hidden_size=hidden_dim,
            num_layers=1,
            batch_first=True,
            bidirectional=True
        )
        self.dropout = nn.Dropout(0.3)
        self.classifier = nn.Linear(hidden_dim * 2, num_classes)

    def forward(self, x):
        emb = self.dropout(self.embedding(x))
        lstm_out, _ = self.lstm(emb)
        pooled, _ = torch.max(lstm_out, dim=1) # Global Max Pooling
        logits = self.classifier(self.dropout(pooled))
        return logits

# 4. CAPSTONE EXECUTION PIPELINE
def run_capstone():
    raw_reviews = [
        "The battery life is exceptional and the display looks stunning! Highly recommended.",
        "Terrible customer service. Device arrived with a broken screen and refused refund.",
        "Decent performance for this price point, though shipping was delayed by five days.",
        "The software is not fast and crashes continuously during database exports.",
        "Outstanding build quality, lightweight chassis, and lightning-fast customer support!"
    ]
    labels = [2, 0, 1, 0, 2] # 0 = Negative, 1 = Neutral, 2 = Positive

    preprocessor = ReviewPreprocessor()
    clean_reviews = [preprocessor.clean(r) for r in raw_reviews]
    
    vocab = ReviewVocabulary(max_size=500)
    vocab.build_vocab(clean_reviews)
    
    dataset = ReviewDataset(clean_reviews, labels, vocab)
    dataloader = DataLoader(dataset, batch_size=2, shuffle=True)
    
    model = BiLSTMSentimentModel(vocab_size=len(vocab.w2i))
    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
    
    model.train()
    for epoch in range(15):
        for batch_x, batch_y in dataloader:
            optimizer.zero_grad()
            preds = model(batch_x)
            loss = criterion(preds, batch_y)
            loss.backward()
            optimizer.step()
            
    print(f"Capstones Pipeline Trained Successfully. Vocabulary Size: {len(vocab.w2i)}")
    
    tfidf = TfidfVectorizer(ngram_range=(1, 2), stop_words="english")
    X_tfidf = tfidf.fit_transform(raw_reviews)
    feature_names = tfidf.get_feature_names_out()
    top_indices = np.argsort(np.asarray(X_tfidf.sum(axis=0)).ravel())[::-1][:5]
    print("Top Key Phrases Extracted:", [feature_names[i] for i in top_indices])

if __name__ == "__main__":
    run_capstone()`,
  rubric: [
    { criterion: "Text Preprocessing & Negation Folding", weight: "15%", description: "Robust regex cleaning, unicode normalization, and correct negation windowing." },
    { criterion: "Custom Tokenizer & Vocabulary Indexing", weight: "15%", description: "Handling of OOV, PAD, and efficient numerical batch conversion." },
    { criterion: "Deep BiLSTM Neural Architecture", weight: "25%", description: "Clean PyTorch implementation with embedding, bidirectional recurrence, and max pooling." },
    { criterion: "Aspect & Entity Mining", weight: "15%", description: "Accurate association of sentiment polarity to specific product aspects (battery, screen, price)." },
    { criterion: "TF-IDF Salient Keyword Extraction", weight: "15%", description: "Statistically sound n-gram ranking across review clusters." },
    { criterion: "Engineering Rigor & Code Cleanliness", weight: "15%", description: "Modular OOP architecture, comprehensive docstrings, and robust error handling." }
  ]
};

export const NLP_INTERVIEW_QUESTIONS = [
  {
    q: "Explain the fundamental difference between Word2Vec (Skip-gram/CBOW) and Contextualized Embeddings like BERT.",
    a: "Word2Vec produces static word vectors: each word token has exactly one fixed geometric representation regardless of context (the word 'bank' has the identical vector in 'river bank' and 'commercial bank'). BERT, by contrast, uses deep bidirectional Transformer self-attention where token representations are dynamic functions of their full surrounding sentence context, resolving polysemy effectively."
  },
  {
    q: "Why does the standard cross-entropy loss over a large vocabulary create a computational bottleneck in language modeling, and how is it mitigated?",
    a: "The denominator of the Softmax function requires summing exponentials over the entire vocabulary (|V| >= 50,000 words) for every single token prediction, costing O(|V|) per gradient step. Solutions include Negative Sampling (SGNS), which reformulates the problem into binary classification against K noise samples, and Hierarchical Softmax, which organizes the vocabulary as a Huffman tree to reduce complexity to O(log|V|)."
  },
  {
    q: "Describe the vanishing gradient problem in Vanilla RNNs and mathematically explain how LSTMs alleviate it.",
    a: "In Vanilla RNNs, backpropagating gradients through time (BPTT) requires repeated matrix multiplication with the recurrent weight matrix W_hh. If its spectral radius is less than 1, gradients decay exponentially toward zero. LSTMs alleviate this through an additive cell state highway C_t = f_t * C_{t-1} + i_t * C~_t. The derivative dC_t/dC_{t-1} includes the forget gate f_t without repeated matrix multiplication, allowing gradients to propagate across hundreds of steps without decaying."
  },
  {
    q: "What is the difference between Byte Pair Encoding (BPE) and WordPiece tokenization?",
    a: "While both are subword tokenizers that resolve Out-of-Vocabulary (OOV) tokens, BPE merges character/token pairs based on highest co-occurrence frequency, whereas WordPiece merges the pair that maximizes the likelihood of the language model over the training corpus (Score = Count(uv) / (Count(u) * Count(v)))."
  },
  {
    q: "In text classification with class imbalance, why is Macro-F1 preferred over Micro-F1 or Accuracy?",
    a: "Accuracy is distorted by the majority class (e.g. 98% non-spam vs 2% spam). Micro-F1 aggregates global true positives, false positives, and false negatives, mirroring overall accuracy. Macro-F1 calculates F1 scores independently for each class and computes their unweighted arithmetic mean, thereby penalizing models that perform poorly on minority classes."
  }
];

export const NLP_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which linguistic level is primarily concerned with the grammatical arrangement of words into phrases and sentences?",
    options: ["Phonology", "Morphology", "Syntax", "Pragmatics"],
    answer: 2,
    explanation: "Syntax studies the rules, principles, and processes that govern the structure and word order of sentences in a given language."
  },
  {
    id: 2,
    question: "What is the primary advantage of subword tokenizers (e.g., BPE, WordPiece) over word-level tokenization?",
    options: [
      "They eliminate the need for training neural networks",
      "They handle out-of-vocabulary (OOV) words by decomposing them into known subwords with a compact vocabulary",
      "They always generate shorter sequence lengths than word tokenizers",
      "They guarantee 100% classification accuracy"
    ],
    answer: 1,
    explanation: "Subword tokenizers split rare or compound words into frequent subword fragments, bounding vocabulary size while preventing out-of-vocabulary errors."
  },
  {
    id: 3,
    question: "How does Lemmatization differ from Stemming?",
    options: [
      "Lemmatization uses heuristic suffix stripping, while Stemming uses vocabulary dictionaries",
      "Stemming considers Part-of-Speech context, while Lemmatization does not",
      "Lemmatization reduces words to valid dictionary headwords using vocabulary and morphological analysis, whereas Stemming chops off word ends heuristically",
      "Stemming is slower and requires more memory than Lemmatization"
    ],
    answer: 2,
    explanation: "Lemmatization uses morphological dictionaries and POS tags to produce valid base words (lemmas), whereas stemming uses crude heuristics to strip affixes, often creating non-words."
  },
  {
    id: 4,
    question: "What is the core mathematical purpose of the Inverse Document Frequency (IDF) factor in TF-IDF?",
    options: [
      "To penalize terms that appear in every document and boost terms that are rare and discriminative across the corpus",
      "To ensure that long documents always receive higher weights than short documents",
      "To calculate the cosine distance between two dense vectors",
      "To replace the need for tokenization"
    ],
    answer: 0,
    explanation: "IDF lowers the weight of omnipresent words (like 'the', 'is') and elevates terms that appear in only a small subset of documents, enhancing discriminative power."
  },
  {
    id: 5,
    question: "What was the fundamental insight of Harris's Distributional Hypothesis upon which Word2Vec is built?",
    options: [
      "Words should be represented by their alphabetical character positions",
      "Words that occur in similar contexts tend to share similar semantic meanings",
      "Grammatical trees can be evaluated using Markov models",
      "Punctuation carries more semantic weight than nouns"
    ],
    answer: 1,
    explanation: "The Distributional Hypothesis states that words occurring in similar linguistic environments (contexts) have similar meanings ('you shall know a word by the company it keeps')."
  },
  {
    id: 6,
    question: "In the Word2Vec Skip-Gram model with Negative Sampling (SGNS), what problem does Negative Sampling solve?",
    options: [
      "It eliminates the need for backpropagation",
      "It avoids computing the computationally prohibitive Softmax denominator over the entire vocabulary",
      "It prevents words from having negative numerical vector coordinates",
      "It automatically corrects spelling mistakes"
    ],
    answer: 1,
    explanation: "Computing full softmax requires summing exponentials over the entire vocabulary (|V|). Negative sampling turns the multi-class problem into K binary logistic regressions."
  },
  {
    id: 7,
    question: "In an LSTM cell, which gate is specifically responsible for deciding which fraction of previous cell state information to discard?",
    options: ["Input Gate", "Candidate Gate", "Forget Gate", "Output Gate"],
    answer: 2,
    explanation: "The Forget gate outputs numbers between 0 (completely discard) and 1 (completely retain) for each element in the previous cell state C_{t-1}."
  },
  {
    id: 8,
    question: "Why does a Bidirectional LSTM (BiLSTM) often outperform a unidirectional LSTM on text classification tasks?",
    options: [
      "It has half the number of trainable parameters",
      "It processes tokens from both past-to-future and future-to-past, providing full contextual representation at each token",
      "It completely eliminates the need for word embeddings",
      "It avoids using activation functions"
    ],
    answer: 1,
    explanation: "A BiLSTM runs two independent hidden layers (forward and backward), concatenating their hidden states to capture contextual dependencies from both left and right."
  },
  {
    id: 9,
    question: "What constitutes 'Data Leakage' during the text preprocessing stage of an NLP machine learning project?",
    options: [
      "Fitting a TF-IDF vectorizer or building the tokenizer vocabulary on the entire dataset before splitting into train and test sets",
      "Removing punctuation marks from training text",
      "Using GPU acceleration during model inference",
      "Using 8-bit dynamic quantization on model weights"
    ],
    answer: 0,
    explanation: "Fitting vectorizers or vocabularies on data that includes the test partition leaks information about test frequencies and words into training, inflating validation metrics."
  },
  {
    id: 10,
    question: "What is the Scaled Dot-Product Attention equation introduced in Vaswani et al. (2017)?",
    options: [
      "Attention(Q,K,V) = tanh(W_q Q + W_k K) V",
      "Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) V",
      "Attention(Q,K,V) = sigmoid(Q * K^T) * V",
      "Attention(Q,K,V) = relu(QK^T) V"
    ],
    answer: 1,
    explanation: "Scaled Dot-Product Attention is defined as softmax((Q K^T) / sqrt(d_k)) V, where sqrt(d_k) prevents dot products from growing excessively large for high dimensions."
  }
];

export const NLP_RESOURCES = [
  {
    title: "Stanford CS224N: Natural Language Processing with Deep Learning",
    institution: "Stanford University (Christopher Manning)",
    type: "University Lecture Series & Course Notes",
    description: "The gold standard university curriculum for modern deep learning NLP, covering word vectors, RNNs, transformers, and large language models.",
    link: "https://web.stanford.edu/class/cs224n/"
  },
  {
    title: "Speech and Language Processing (3rd ed. draft)",
    institution: "Dan Jurafsky & James H. Martin (Stanford / CU Boulder)",
    type: "Academic Textbook",
    description: "The authoritative textbook across computational linguistics, statistical NLP, language models, sequence labeling, and dialog systems.",
    link: "https://web.stanford.edu/~jurafsky/slp3/"
  },
  {
    title: "Hugging Face NLP Course",
    institution: "Hugging Face Research",
    type: "Interactive Practical Guide",
    description: "Hands-on engineering mastery of modern tokenizers, transformers, dataset pipelines, and fine-tuning with PyTorch and Accelerate.",
    link: "https://huggingface.co/learn/nlp-course"
  },
  {
    title: "Natural Language Processing with Python (NLTK Book)",
    institution: "Steven Bird, Ewan Klein, and Edward Loper",
    type: "Open Access Textbook",
    description: "Foundational guide to linguistic corpus processing, regular expressions, context-free grammars, and lexical semantics in Python.",
    link: "https://www.nltk.org/book/"
  },
  {
    title: "spaCy Production Industrial-Strength NLP Documentation",
    institution: "Explosion AI",
    type: "Technical Documentation & API Reference",
    description: "Best practices for rule-based matching, dependency parsing, custom pipeline components, and entity recognition in production.",
    link: "https://spacy.io/usage"
  },
  {
    title: "PyTorch Sequence Modeling & NLP Tutorials",
    institution: "PyTorch Core Engineering Team",
    type: "Official PyTorch Documentation",
    description: "Deep tutorials on sequence models, LSTM networks, embeddings, and character-level generative modeling in PyTorch.",
    link: "https://pytorch.org/tutorials/beginner/nlp_preprocessing_tutorial.html"
  }
];
