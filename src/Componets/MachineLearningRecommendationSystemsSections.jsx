import React from "react";
import {
  Sparkles,
  Layers,
  TrendingDown,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  Code,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Database,
  BarChart2,
  Box,
  Eye,
  Activity,
  Sliders,
  Maximize2,
  Target,
  FileCode,
  FolderGit2,
  Search,
  Filter,
  UserCheck,
  Film,
  Star,
  ThumbsUp,
  Grid,
} from "lucide-react";

export default function MachineLearningRecommendationSystemsSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: RECOMMENDATION SYSTEM FUNDAMENTALS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Recommendation System Fundamentals &amp; Information Filtering
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A <strong>Recommendation System</strong> is an intelligent information-filtering engine that analyzes user behavior, historical interaction records, item metadata, and contextual signals to predict what a user is likely to prefer and surface the most relevant items.
        </p>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Modern digital platforms contain millions of items&mdash;far more than any individual can discover manually. Recommendation engines mitigate this catastrophic information-overload challenge across leading industries:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Streaming &amp; Media</span>
            <h3 className="font-bold text-stone-900 text-sm">Netflix, YouTube, Spotify</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Predicting video watch completion, personalized homepage carousels, and next-track audio sequencing based on consumption velocity.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">E-Commerce</span>
            <h3 className="font-bold text-stone-900 text-sm">Amazon, Shopify</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              "Frequently bought together" cross-selling, cart complement recommendations, and personalized discount retargeting.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Social &amp; Feeds</span>
            <h3 className="font-bold text-stone-900 text-sm">TikTok, Instagram, LinkedIn</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Algorithmic short-form video feeds maximizing dwell time, engagement graphs, and professional connection discovery.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">EdTech &amp; Learning</span>
            <h3 className="font-bold text-stone-900 text-sm">PrepSpaces, Coursera</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Adaptive mastery roadmaps suggesting next modules, practice coding labs, and prerequisites based on skill assessment gaps.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-orange-950 text-xs sm:text-sm space-y-2">
          <span className="font-bold flex items-center gap-1.5 text-orange-800">
            <Sparkles size={16} /> The Core Value Proposition: Personalization vs Static Search
          </span>
          <p className="leading-relaxed">
            While traditional search engines require the user to formulate an explicit query ("search query &rarr; matching documents"), recommendation systems act autonomously ("user identity &amp; historical context &rarr; serendipitous discovery of items the user didn't even know existed").
          </p>
        </div>
      </section>

      {/* SECTION 2: RECOMMENDATION PROBLEM FORMULATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Mathematical Framing
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Recommendation Problem Formulation: Rating Prediction vs. Top-N Ranking
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Recommendation systems can be mathematically formalized into two foundational task paradigms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2">
              <Star className="text-amber-500" size={18} />
              <h3 className="font-bold text-stone-900 text-base">A. Rating Prediction (Regression Task)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Estimate the exact numerical score <em>r&#770;<sub>u,i</sub></em> that a user <em>u</em> would assign to an unobserved item <em>i</em> on a known scale (e.g., 1.0 to 5.0 stars).
            </p>
            <div className="p-3 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-800">
              f: (User, Item) &rarr; r&#770; &isin; [1.0, 5.0]
            </div>
            <p className="text-xs text-stone-500">
              Evaluated using Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-orange-600" size={18} />
              <h3 className="font-bold text-stone-900 text-base">B. Top-N Recommendation (Ranking Task)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Generate an ordered list of <em>N</em> items sorted by predicted relevance or click probability, where the precise numerical score is secondary to relative rank order.
            </p>
            <div className="p-3 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-800">
              TopN(u) = argmax<sub>i &isin; I \ I<sub>u</sub></sub> (score(u, i))
            </div>
            <p className="text-xs text-stone-500">
              Evaluated using Precision@K, Recall@K, Mean Reciprocal Rank (MRR), and NDCG@K.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Dimension</th>
                <th className="p-3">Rating Prediction</th>
                <th className="p-3">Top-N Ranking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Primary Objective</td>
                <td className="p-3">Minimize numerical error across all predictions</td>
                <td className="p-3 font-semibold text-orange-700">Maximize relevance of top slots presented to user</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">User Experience Reality</td>
                <td className="p-3">Users rarely care whether a bad movie is rated 1.8 or 2.3</td>
                <td className="p-3 font-semibold text-orange-700">Directly drives clicks, conversions, and satisfaction</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Loss Function</td>
                <td className="p-3 font-mono">MSE = 1/|R| &Sigma; (r<sub>u,i</sub> &minus; r&#770;<sub>u,i</sub>)&sup2;</td>
                <td className="p-3 font-mono">BPR (Bayesian Personalized Ranking), Pairwise Margin Loss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: USER-ITEM INTERACTION MATRICES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Data Representation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. User-Item Interaction Matrices: Feedback Types &amp; Sparsity
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          The mathematical backbone of collaborative filtering is the <strong>User-Item Interaction Matrix</strong> <em>R &isin; &real;<sup>M &times; N</sup></em>, where rows represent <em>M</em> distinct users, columns represent <em>N</em> distinct items, and each entry <em>r<sub>u,i</sub></em> records the interaction between user <em>u</em> and item <em>i</em>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Explicit Feedback</span>
            <h3 className="font-bold text-stone-900 text-sm">Direct, Deliberate Assessments</h3>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
              <li>1&ndash;5 star numerical ratings (Amazon, Goodreads, Uber).</li>
              <li>Thumbs Up / Thumbs Down binary ratings (Netflix, YouTube).</li>
              <li>Written review sentiment polarity.</li>
              <li><strong>Pros:</strong> High confidence, unambiguous negative preference signals.</li>
              <li><strong>Cons:</strong> Extremely scarce (&lt; 1% of users voluntarily provide explicit ratings).</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Implicit Feedback</span>
            <h3 className="font-bold text-stone-900 text-sm">Observed Behavioral Interactions</h3>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
              <li>Item clicks, page views, and dwell time.</li>
              <li>Playback completion percentage (streamed &gt; 80% vs skipped).</li>
              <li>Add to cart, purchase transactions, and bookmarks.</li>
              <li><strong>Pros:</strong> Abundant, passive, frictionless collection on 100% of users.</li>
              <li><strong>Cons:</strong> No negative signals (unviewed != disliked; unviewed = unexposed).</li>
            </ul>
          </div>
        </div>

        {/* Matrix Sparsity Visualization */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
          <div className="text-stone-400 font-sans font-bold text-sm text-white flex items-center justify-between">
            <span>Matrix Sparsity Calculation Formula</span>
            <span className="text-orange-400 font-mono text-xs">Sparsity &gt; 99% in production</span>
          </div>
          <div className="p-3 bg-stone-800/80 rounded-xl">
            Sparsity = 1 &minus; ( Total Observed Ratings / ( Total Users &times; Total Items ) )
          </div>
          <p className="text-stone-300 font-sans text-xs leading-relaxed">
            In Netflix (200M+ users, 15K titles) or Spotify (500M+ users, 100M songs), an active user interacts with at most a few hundred items. Over <strong>99.9%</strong> of the interaction matrix cells are completely empty (missing values), rendering naive dense matrix storage computationally prohibitive.
          </p>
        </div>
      </section>

      {/* SECTION 4: CONTENT-BASED FILTERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Attribute-Driven Filtering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Content-Based Filtering: Feature Extraction, TF-IDF &amp; User Profiles
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          <strong>Content-Based Filtering</strong> recommends items that share similar descriptive attributes with items the user has previously liked or engaged with. Rather than relying on crowd interactions, it models item content (genres, text tags, cast, directors) and compares them against a synthesized user taste vector.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Step 1: Item Vectorization</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Convert raw metadata (plots, keywords, tags) into numerical feature vectors using <strong>TF-IDF</strong> (Term Frequency &minus; Inverse Document Frequency) or deep embedding models.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Step 2: User Profile Synthesis</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Construct a user profile vector <em>u&#8407;</em> as the weighted average of item vectors they rated highly: <em>u&#8407; = &Sigma; r<sub>u,i</sub> &times; v&#8407;<sub>i</sub></em>.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Step 3: Similarity Matching</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Calculate the Cosine Similarity between the user profile vector and candidate unviewed item vectors to surface the Top-N highest-scoring items.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-stone-500">
            TF-IDF Mathematics &amp; Implementation in Scikit-Learn
          </span>
          <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import pandas as pd

# 1. Prepare item text representations (genre + plot keywords + cast)
movies['metadata_soup'] = movies['genres'] + ' ' + movies['keywords'] + ' ' + movies['director']

# 2. Compute TF-IDF matrix (term frequency scaled by inverse document frequency)
tfidf = TfidfVectorizer(stop_words='english', max_features=5000)
tfidf_matrix = tfidf.fit_transform(movies['metadata_soup'])

# 3. Compute pairwise Cosine Similarity matrix (linear_kernel is optimized for normalized TF-IDF)
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

def recommend_similar_content(movie_title, top_n=5):
    idx = movie_indices[movie_title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:top_n+1]
    return movies['title'].iloc[[i[0] for i in sim_scores]]`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1">
              <CheckCircle2 size={14} /> Advantages of Content-Based Filtering
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">
              No crowd cold-start problem (new items can be recommended immediately upon publication); transparent, easily explainable ("Recommended because you watched Sci-Fi movies starring Matthew McConaughey"); highly personalized to niche tastes.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase flex items-center gap-1">
              <AlertTriangle size={14} /> Limitations: The "Filter Bubble" &amp; Overspecialization
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">
              Never discovers unexpected serendipitous items outside the user's historical feature profile (overspecialization); unable to capture quality or artistic craftsmanship (bad Sci-Fi has the exact same TF-IDF tags as Interstellar).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COLLABORATIVE FILTERING - USER-BASED */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 05
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Crowd-Sourced Intelligence
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. User-Based Collaborative Filtering (UBCF)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          <strong>User-Based Collaborative Filtering (UBCF)</strong> operates on the intuitive sociological premise: <em>"Users who agreed on item evaluations in the past are likely to agree again in the future."</em>
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
          <h3 className="font-bold text-stone-900 text-sm">Rating Prediction Formula with Mean-Centering Bias Correction</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Because individual users exhibit different rating habits (a harsh user's 3.5-star rating might reflect genuine praise, whereas a generous user gives 5.0 to everything), we subtract user means before weighting and re-add the active user's baseline:
          </p>
          <div className="p-4 rounded-xl bg-white border border-stone-200 font-mono text-xs sm:text-sm text-stone-900 overflow-x-auto">
            r&#770;<sub>u,i</sub> = r&#772;<sub>u</sub> + [ &Sigma;<sub>v &isin; N<sub>k</sub>(u)</sub> sim(u, v) &times; (r<sub>v,i</sub> &minus; r&#772;<sub>v</sub>) ] / [ &Sigma;<sub>v &isin; N<sub>k</sub>(u)</sub> |sim(u, v)| ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-600">
            <div><strong>r&#772;<sub>u</sub>:</strong> Average rating given by active user <em>u</em></div>
            <div><strong>sim(u, v):</strong> Similarity weight between user <em>u</em> and neighbor <em>v</em></div>
            <div><strong>N<sub>k</sub>(u):</strong> Set of top <em>k</em> neighbors who rated item <em>i</em></div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1">
          <span className="font-bold text-amber-800 flex items-center gap-1.5">
            <AlertTriangle size={15} /> UBCF Computational Bottleneck
          </span>
          <p className="leading-relaxed">
            Calculating user similarities requires pairwise comparisons across all users: <em>O(M&sup2; &times; N)</em>. When a platform scales to 100,000,000 users, computing and updating user similarities in real time becomes mathematically and operationally impossible.
          </p>
        </div>
      </section>

      {/* SECTION 6: ITEM-BASED COLLABORATIVE FILTERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 06
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Industrial Scalability
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. Item-Based Collaborative Filtering (IBCF)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Pioneered by Amazon engineers in 2001, <strong>Item-Based Collaborative Filtering (IBCF)</strong> inverts the perspective: instead of searching for similar users, it identifies pairs of items that tend to be rated or purchased together by the same users.
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
          <h3 className="font-bold text-stone-900 text-sm">IBCF Rating Prediction Formula</h3>
          <div className="p-4 rounded-xl bg-white border border-stone-200 font-mono text-xs sm:text-sm text-stone-900 overflow-x-auto">
            r&#770;<sub>u,i</sub> = [ &Sigma;<sub>j &isin; S<sub>k</sub>(i) &cap; I<sub>u</sub></sub> sim(i, j) &times; r<sub>u,j</sub> ] / [ &Sigma;<sub>j &isin; S<sub>k</sub>(i) &cap; I<sub>u</sub></sub> |sim(i, j)| ]
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Where <em>S<sub>k</sub>(i)</em> represents the <em>k</em> items most similar to target item <em>i</em>, and <em>I<sub>u</sub></em> is the set of items user <em>u</em> has already rated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Why IBCF Dominates E-Commerce</span>
            <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside">
              <li><strong>Item Count &lt;&lt; User Count:</strong> Amazon has ~10M products but hundreds of millions of users. <em>N &times; N</em> is orders of magnitude smaller than <em>M &times; M</em>.</li>
              <li><strong>Item Similarity Stability:</strong> A movie's relationship to another movie (e.g., <em>The Godfather</em> &amp; <em>Goodfellas</em>) remains static over decades, whereas a user's taste shifts dynamically.</li>
              <li><strong>Offline Precomputation:</strong> Item-to-item similarity matrices can be computed asynchronously in batch overnight and cached in Redis for sub-millisecond real-time queries.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Immediate Explainability</span>
            <p className="text-xs text-stone-700 leading-relaxed">
              IBCF provides immediate, intuitive customer-facing explanations:
            </p>
            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs italic text-stone-800">
              "Because you purchased Apple AirPods Pro &rarr; Recommended: Anker USB-C MagSafe Wireless Charger (Item Similarity: 0.89)"
            </div>
            <p className="text-xs text-stone-500">
              This transparent causality significantly increases user purchase conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: SIMILARITY MEASURES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 07
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Distance &amp; Affinity Metrics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Similarity Measures: Cosine, Pearson, Jaccard &amp; Euclidean
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          The quality of both content-based and collaborative neighborhood recommendations depends directly on selecting the mathematically appropriate similarity metric for the data representation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm">1. Cosine Similarity</h3>
              <span className="text-xs font-mono text-orange-600 font-bold">&isin; [-1.0, 1.0]</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Measures the angle between two multi-dimensional rating vectors, invariant to vector magnitude:
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-900">
              cos(&theta;) = ( u&#8407; &middot; v&#8407; ) / ( ||u&#8407;|| &times; ||v&#8407;|| )
            </div>
            <p className="text-xs text-stone-500">Ideal for TF-IDF document vectors and latent embedding spaces.</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm">2. Pearson Correlation Coefficient</h3>
              <span className="text-xs font-mono text-orange-600 font-bold">&isin; [-1.0, 1.0]</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Measures linear correlation after subtracting each user's mean rating across co-rated items:
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-900">
              PCC(u, v) = &Sigma; (r<sub>u,i</sub> &minus; r&#772;<sub>u</sub>)(r<sub>v,i</sub> &minus; r&#772;<sub>v</sub>) / [ &radic;&Sigma;(r<sub>u,i</sub> &minus; r&#772;<sub>u</sub>)&sup2; &times; &radic;&Sigma;(r<sub>v,i</sub> &minus; r&#772;<sub>v</sub>)&sup2; ]
            </div>
            <p className="text-xs text-stone-500">The gold standard for explicit user-based collaborative filtering.</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm">3. Jaccard Similarity</h3>
              <span className="text-xs font-mono text-orange-600 font-bold">&isin; [0.0, 1.0]</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Calculates set intersection over set union for binary implicit interactions (clicks, views):
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-900">
              Jaccard(A, B) = | A &cap; B | / | A &cup; B |
            </div>
            <p className="text-xs text-stone-500">Fast, memory-efficient metric for implicit e-commerce co-occurrence.</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm">4. Adjusted Cosine Similarity</h3>
              <span className="text-xs font-mono text-orange-600 font-bold">&isin; [-1.0, 1.0]</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Applies user mean-centering directly to item-item vectors to eliminate user leniency bias in IBCF:
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-xs text-stone-900">
              AdjCos(i, j) = &Sigma; (r<sub>u,i</sub> &minus; r&#772;<sub>u</sub>)(r<sub>u,j</sub> &minus; r&#772;<sub>u</sub>) / [ &radic;&Sigma;(r<sub>u,i</sub> &minus; r&#772;<sub>u</sub>)&sup2; &times; &radic;&Sigma;(r<sub>u,j</sub> &minus; r&#772;<sub>u</sub>)&sup2; ]
            </div>
            <p className="text-xs text-stone-500">Standard metric for production item-based CF.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: MATRIX FACTORIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 08
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Latent Factor Modeling
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8. Matrix Factorization: Latent Factors, Bias Terms &amp; Optimization
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          <strong>Matrix Factorization (MF)</strong> overcomes the sparsity and scalability limitations of neighborhood models by decomposing the sparse user-item interaction matrix <em>R &isin; &real;<sup>M &times; N</sup></em> into the product of two dense, low-rank matrices:
        </p>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm space-y-3">
          <div className="text-orange-400 font-sans font-bold text-sm">Low-Rank Latent Factor Decomposition</div>
          <div className="p-3 bg-stone-800 rounded-xl text-center text-white">
            R &approx; P &times; Q<sup>T</sup> &emsp;&emsp; where P &isin; &real;<sup>M &times; K</sup> and Q &isin; &real;<sup>N &times; K</sup> (K &lt;&lt; min(M, N))
          </div>
          <p className="text-stone-300 font-sans text-xs leading-relaxed">
            Here, <em>K</em> denotes the number of hidden <strong>latent factors</strong> (e.g., K = 20 to 100). For movies, latent dimensions automatically capture abstract concepts like "cerebral psychological pacing", "dark comedic undertones", or "visual spectacle" without human manual annotation.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
          <h3 className="font-bold text-stone-900 text-sm">The 4-Component Rating Prediction Equation</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            In the classic Netflix Prize formulation (Koren et al., 2009), observed ratings are modeled by global, user, and item bias baselines plus the latent interaction dot product:
          </p>
          <div className="p-4 rounded-xl bg-white border border-stone-200 font-mono text-xs sm:text-sm text-stone-900">
            r&#770;<sub>u,i</sub> = &mu; + b<sub>u</sub> + b<sub>i</sub> + p&#8407;<sub>u</sub> &middot; q&#8407;<sub>i</sub><sup>T</sup>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-stone-600">
            <div className="p-2.5 rounded-lg bg-stone-100/70"><strong>&mu;:</strong> Global average rating across all users and all items.</div>
            <div className="p-2.5 rounded-lg bg-stone-100/70"><strong>b<sub>u</sub>:</strong> User bias (does user <em>u</em> rate higher or lower than average?).</div>
            <div className="p-2.5 rounded-lg bg-stone-100/70"><strong>b<sub>i</sub>:</strong> Item bias (does item <em>i</em> generally receive higher ratings?).</div>
            <div className="p-2.5 rounded-lg bg-stone-100/70"><strong>p&#8407;<sub>u</sub> &middot; q&#8407;<sub>i</sub><sup>T</sup>:</strong> True personalized taste affinity.</div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-stone-900 text-sm">Regularized Optimization Objective &amp; SGD Updates</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Parameters &theta; = &lbrace;b<sub>u</sub>, b<sub>i</sub>, P, Q&rbrace; are trained to minimize the regularized squared error loss over known ratings <em>(u, i) &isin; R<sub>train</sub></em>:
          </p>
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl font-mono text-xs text-stone-900 overflow-x-auto">
            L = &Sigma;<sub>(u,i) &isin; R<sub>train</sub></sub> ( r<sub>u,i</sub> &minus; r&#770;<sub>u,i</sub> )&sup2; + &lambda; [ b<sub>u</sub>&sup2; + b<sub>i</sub>&sup2; + ||p&#8407;<sub>u</sub>||&sup2; + ||q&#8407;<sub>i</sub>||&sup2; ]
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Using Stochastic Gradient Descent (SGD), each observed training rating yields prediction error <em>e<sub>u,i</sub> = r<sub>u,i</sub> &minus; r&#770;<sub>u,i</sub></em>, with parameter updates governed by learning rate &gamma; and penalty &lambda;:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-stone-800 bg-stone-100/70 p-3 rounded-xl">
            <div>b<sub>u</sub> &larr; b<sub>u</sub> + &gamma; ( e<sub>u,i</sub> &minus; &lambda; b<sub>u</sub> )</div>
            <div>b<sub>i</sub> &larr; b<sub>i</sub> + &gamma; ( e<sub>u,i</sub> &minus; &lambda; b<sub>i</sub> )</div>
            <div>p&#8407;<sub>u</sub> &larr; p&#8407;<sub>u</sub> + &gamma; ( e<sub>u,i</sub> q&#8407;<sub>i</sub> &minus; &lambda; p&#8407;<sub>u</sub> )</div>
            <div>q&#8407;<sub>i</sub> &larr; q&#8407;<sub>i</sub> + &gamma; ( e<sub>u,i</sub> p&#8407;<sub>u</sub> &minus; &lambda; q&#8407;<sub>i</sub> )</div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SINGULAR VALUE DECOMPOSITION (SVD) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Linear Algebra Derivations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          9. Singular Value Decomposition (SVD): Classical vs. Funk SVD
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          In linear algebra, any real matrix <em>A &isin; &real;<sup>M &times; N</sup></em> can be factorized via <strong>Singular Value Decomposition (SVD)</strong> into <em>A = U &Sigma; V<sup>T</sup></em>, where <em>U</em> and <em>V</em> are orthogonal singular vectors and <em>&Sigma;</em> contains non-negative singular values sorted by explained variance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase">Classical Linear Algebra SVD</span>
            <h3 className="font-bold text-stone-900 text-sm">Requires Complete, Dense Matrices</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard SVD is undefined when matrix entries are missing. In recommendation systems where 99.5% of entries are unrated, one would have to naively impute unrated values with zeros or column means.
            </p>
            <div className="p-3 bg-red-50 text-red-900 rounded-xl text-xs">
              <strong>Fatal Flaw:</strong> Zero-filling turns unobserved items into disliked items, drastically distorting the latent geometric manifold and incurring catastrophic computational overhead.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">Funk SVD (Simon Funk, 2006)</span>
            <h3 className="font-bold text-stone-900 text-sm">Optimizes Only Over Observed Ratings</h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Funk recognized that one does not need classical SVD decomposition. Instead, one can train low-rank matrices <em>P</em> and <em>Q</em> directly on <strong>only the known ratings</strong> using regularized gradient descent, completely ignoring unrated cells during gradient backpropagation.
            </p>
            <div className="p-3 bg-white border border-orange-200 rounded-xl text-xs text-orange-950">
              <strong>The Breakthrough:</strong> Made matrix factorization feasible for commercial scale and served as the cornerstone of the winning Netflix Prize algorithm.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: IMPLICIT FEEDBACK MODELING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Behavioral Modeling
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10. Implicit Feedback: Confidence-Weighted Preference Modeling
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Because commercial platforms rarely receive 1&ndash;5 star ratings, algorithms must learn from implicit user actions (clicks, search queries, streaming duration). In 2008, Hu, Koren, and Volinsky formulated <strong>Collaborative Filtering for Implicit Datasets</strong> using binary preference with varying confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">1. Binary Preference Variable (p<sub>u,i</sub>)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              If interaction count <em>r<sub>u,i</sub> &gt; 0</em> (e.g., song played 1 or more times), then <em>p<sub>u,i</sub> = 1</em>. If no interaction occurred, <em>p<sub>u,i</sub> = 0</em>.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">2. Confidence Variable (c<sub>u,i</sub>)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              A user who watched a movie 10 times is far more confident in their positive preference than someone who clicked once and exited:
            </p>
            <div className="p-2 rounded-lg bg-white border border-stone-200 font-mono text-xs text-stone-900">
              c<sub>u,i</sub> = 1 + &alpha; &times; r<sub>u,i</sub> &emsp; (&alpha; &asymp; 40)
            </div>
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          The loss function penalizes errors with high confidence heavily, while treating unobserved items (where <em>c<sub>u,i</sub> = 1</em>) with minimal penalty, resolved efficiently via <strong>Alternating Least Squares (ALS)</strong>.
        </p>
      </section>

      {/* SECTION 11: COLD-START PROBLEM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            System Degeneracy
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          11. The Cold-Start Problem: New Users, New Items &amp; System Inception
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          The <strong>Cold-Start Problem</strong> occurs when a recommendation algorithm has insufficient interaction data to produce accurate personalized inferences. It manifests in three distinct engineering scenarios:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">1. New-User Cold Start</span>
            <h3 className="font-bold text-stone-900 text-sm">Zero History for User</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A newly registered user has rated zero items and has zero click logs.
            </p>
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-700 font-medium">
              <strong>Remedies:</strong> Onboarding taste quizzes (select 3 favorite genres/artists); geo-demographic defaults; trending/popular starter carousels.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">2. New-Item Cold Start</span>
            <h3 className="font-bold text-stone-900 text-sm">Zero Ratings for Item</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A newly published article, newly listed product, or newly released movie has received 0 ratings.
            </p>
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-700 font-medium">
              <strong>Remedies:</strong> Content-based metadata embedding match; multi-armed bandit exploration (epsilon-greedy traffic allocation to collect fresh interactions).
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">3. New-System Cold Start</span>
            <h3 className="font-bold text-stone-900 text-sm">Day 0 Platform Launch</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A brand new startup platform with few users and few items across the board.
            </p>
            <div className="pt-2 border-t border-stone-200 text-xs text-stone-700 font-medium">
              <strong>Remedies:</strong> Pure rule-based editorial curation; knowledge graphs; pre-trained LLM semantic vector search; transferring cross-domain embeddings.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: HYBRID RECOMMENDATION SYSTEMS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 12
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Ensemble Architectures
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          12. Hybrid Recommendation Systems &amp; Fusion Patterns
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Because collaborative filtering provides serendipity but suffers from cold-start, while content-based filtering handles new items but creates filter bubbles, enterprise systems combine both paradigms into <strong>Hybrid Recommendation Architectures</strong>:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Hybrid Pattern</th>
                <th className="p-3">Architectural Mechanism</th>
                <th className="p-3">Industry Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Weighted Hybrid</td>
                <td className="p-3">Combines predicted scores via convex combination: Score = &alpha; &times; CF_Score + (1 &minus; &alpha;) &times; CB_Score</td>
                <td className="p-3">E-commerce ranking (balances product category match with customer purchasing patterns)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Switching Hybrid</td>
                <td className="p-3">Uses a routing condition: if user interactions &lt; 5, use Content-Based; once interactions &ge; 5, switch to Collaborative Filtering</td>
                <td className="p-3">Cold-start user onboarding flows (News aggregators, Spotify new signups)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Cascade Hybrid</td>
                <td className="p-3">Coarse collaborative filtering retrieves top 500 candidates; fine-grained content-based deep ranker orders the top 10</td>
                <td className="p-3">YouTube two-stage retrieval and ranking architecture</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Feature Combination</td>
                <td className="p-3">Injects item content attributes and user demographic features directly into latent matrix factorization factor vectors</td>
                <td className="p-3">LightFM, Factorization Machines (FM), Deep &amp; Cross Network (DCN)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 13: RECOMMENDATION EVALUATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Validation &amp; Metrics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          13. Recommendation Evaluation: Accuracy, Ranking &amp; Beyond-Accuracy Metrics
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Evaluating recommendation engines requires measuring both numerical prediction accuracy and the perceptual ranking quality of top items presented to users:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Top-N Ranking Metrics</span>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>Precision@K:</strong> Proportion of recommended items in the top <em>K</em> that are truly relevant: <code>Hits / K</code>.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>Recall@K:</strong> Proportion of all relevant items in the test set captured in the top <em>K</em>: <code>Hits / |Relevant_Items|</code>.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>NDCG@K (Normalized Discounted Cumulative Gain):</strong> Positions matter! Evaluates whether highly relevant items appear at position #1 and #2 rather than position #10 using logarithmic position discounting:
                <div className="font-mono mt-1 text-stone-900">DCG@K = &Sigma;<sub>i=1..K</sub> ( 2<sup>rel<sub>i</sub></sup> &minus; 1 ) / log<sub>2</sub>(i + 1)</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Beyond-Accuracy Business Metrics</span>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>Catalog Coverage:</strong> Percentage of items in the entire catalog that get recommended to at least one user (preventing dead inventory).
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>Diversity:</strong> Average pairwise distance between recommended items in a user's single list (avoiding 10 Batman movies in a row).
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <strong>Novelty / Serendipity:</strong> Recommending pleasant surprises that the user was unlikely to find independently, escaping popularity bias.
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700 space-y-2">
          <span className="font-bold text-stone-900 flex items-center gap-1.5">
            <Activity size={15} /> Online A/B Testing: The Ultimate Arbiter
          </span>
          <p className="leading-relaxed">
            While offline metrics (NDCG, RMSE) guide hyperparameter tuning, production validation always relies on randomized live <strong>A/B testing</strong> measuring genuine business KPIs: Click-Through Rate (CTR), Conversion Rate, Average Session Watch Time, and 30-Day Customer Churn Rate.
          </p>
        </div>
      </section>

      {/* SECTION 14: PYTHON MOVIE RECOMMENDATION SYSTEM IMPLEMENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 14
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            End-to-End Code Blueprint
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          14. Building a Complete Movie Recommendation System in Python
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Below is a complete, production-grade Python script implementing data preprocessing, train-test splitting, regularized Funk SVD matrix factorization trained via SGD, content-based TF-IDF cosine matching, and top-N ranking generation:
        </p>

        <pre className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# ==============================================================================
# 1. DATA PREPARATION (MovieLens Style Schema)
# ==============================================================================
movies_data = {
    'movieId': [1, 2, 3, 4, 5, 6, 7, 8],
    'title': ['Inception', 'Interstellar', 'The Dark Knight', 'The Matrix', 
              'Toy Story', 'Finding Nemo', 'Titanic', 'The Notebook'],
    'genres': ['Sci-Fi Action Thriller', 'Sci-Fi Drama Space', 'Action Crime Drama', 
               'Sci-Fi Action Cyberpunk', 'Animation Adventure Comedy', 
               'Animation Adventure Family', 'Romance Drama History', 'Romance Drama Heartbreak']
}
movies_df = pd.DataFrame(movies_data)

ratings_data = {
    'userId': [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
    'movieId': [1, 2, 4, 1, 3, 4, 5, 6, 7, 7, 8, 2],
    'rating': [5.0, 4.5, 5.0, 4.0, 5.0, 4.0, 5.0, 4.5, 2.0, 5.0, 4.5, 2.5]
}
ratings_df = pd.DataFrame(ratings_data)

# ==============================================================================
# 2. CONTENT-BASED TF-IDF RECOMMENDATION
# ==============================================================================
tfidf = TfidfVectorizer(stop_words='english')
tfidf_mat = tfidf.fit_transform(movies_df['genres'])
cosine_sim = linear_kernel(tfidf_mat, tfidf_mat)

movie_to_idx = {title: i for i, title in enumerate(movies_df['title'])}
idx_to_movie = {i: title for i, title in enumerate(movies_df['title'])}

def get_content_recommendations(title, top_k=3):
    idx = movie_to_idx[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:top_k+1]
    return [(idx_to_movie[i], round(score, 3)) for i, score in sim_scores]

# ==============================================================================
# 3. REGULARIZED FUNK MATRIX FACTORIZATION WITH SGD
# ==============================================================================
class FunkSVDRecommender:
    def __init__(self, n_factors=4, lr=0.01, reg=0.05, n_epochs=50):
        self.k = n_factors
        self.lr = lr
        self.reg = reg
        self.epochs = n_epochs
        
    def fit(self, ratings):
        self.user_ids = sorted(ratings['userId'].unique())
        self.item_ids = sorted(ratings['movieId'].unique())
        self.u_map = {uid: i for i, uid in enumerate(self.user_ids)}
        self.i_map = {mid: i for i, mid in enumerate(self.item_ids)}
        
        n_u, n_i = len(self.user_ids), len(self.item_ids)
        self.mu = ratings['rating'].mean()
        
        # Initialize bias vectors and latent factor matrices
        rng = np.random.default_rng(42)
        self.bu = np.zeros(n_u)
        self.bi = np.zeros(n_i)
        self.P = rng.normal(0, 0.1, size=(n_u, self.k))
        self.Q = rng.normal(0, 0.1, size=(n_i, self.k))
        
        # Training SGD loop over observed ratings
        for epoch in range(self.epochs):
            for _, row in ratings.iterrows():
                u = self.u_map[row['userId']]
                i = self.i_map[row['movieId']]
                r = row['rating']
                
                # Predict rating
                pred = self.mu + self.bu[u] + self.bi[i] + np.dot(self.P[u], self.Q[i])
                err = r - pred
                
                # Gradient update steps with L2 regularization
                self.bu[u] += self.lr * (err - self.reg * self.bu[u])
                self.bi[i] += self.lr * (err - self.reg * self.bi[i])
                p_u_old = self.P[u].copy()
                self.P[u] += self.lr * (err * self.Q[i] - self.reg * self.P[u])
                self.Q[i] += self.lr * (err * p_u_old - self.reg * self.Q[i])
                
    def predict(self, user_id, movie_id):
        if user_id not in self.u_map or movie_id not in self.i_map:
            return self.mu
        u = self.u_map[user_id]
        i = self.i_map[movie_id]
        return float(np.clip(self.mu + self.bu[u] + self.bi[i] + np.dot(self.P[u], self.Q[i]), 1.0, 5.0))

svd_model = FunkSVDRecommender(n_factors=3, lr=0.02, reg=0.05, n_epochs=40)
svd_model.fit(ratings_df)
print("Content Recs for 'Inception':", get_content_recommendations('Inception'))
print(f"Predicted User 1 rating for 'Titanic' (Unseen): {svd_model.predict(1, 7):.2f}")`}
        </pre>
      </section>

      {/* SECTION 15: REAL-WORLD INDUSTRIAL ARCHITECTURE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 15
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Systems Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          15. Real-World Two-Stage Recommendation Architecture
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Scoring a catalog of 100,000,000 items with a 50-layer deep neural network in under 20 milliseconds is physically impossible. Modern production architectures (YouTube, Netflix, TikTok) therefore decompose the recommendation pipeline into distinct, specialized stages:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Stage 1: Candidate Generation</span>
            <h3 className="font-bold text-stone-900 text-sm">Millions &rarr; Hundreds</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Lightweight two-tower neural networks or Approximate Nearest Neighbor (ANN) index searches (FAISS, Milvus) retrieve the top ~500 most relevant candidates within 5&ndash;10ms.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Stage 2: Heavy Scoring &amp; Ranking</span>
            <h3 className="font-bold text-stone-900 text-sm">Hundreds &rarr; Dozens</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A high-capacity deep ranker (e.g., Deep &amp; Cross Network, Transformer ranker) computes cross-feature interactions, user context (time, device), and predicts precise click/watch probability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Stage 3: Re-Ranking &amp; Business Logic</span>
            <h3 className="font-bold text-stone-900 text-sm">Dozens &rarr; Final Display</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Applies safety filtering, deduplication, promotional sponsorship injection, category diversity constraints, and freshness exploration before delivering the UI payload.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 16: ADVANCED CHALLENGES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Pathologies &amp; Ethics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          16. Advanced Challenges: Popularity Bias, Filter Bubbles &amp; Concept Drift
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Building production-ready recommendation systems requires diagnosing and counteracting several inherent algorithmic pathologies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase">1. Popularity Bias</span>
            <h3 className="font-bold text-stone-900 text-sm">The Rich-Get-Richer Loop</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard models disproportionately recommend blockbuster items because they have the most training signals, starving long-tail niche items and stifling discovery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase">2. Filter Bubbles &amp; Echo Chambers</span>
            <h3 className="font-bold text-stone-900 text-sm">Narrowing Horizons</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hyper-optimizing for short-term engagement repeatedly feeds users similar content, reinforcing ideological biases and creating user boredom/churn.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">3. Temporal Concept Drift</span>
            <h3 className="font-bold text-stone-900 text-sm">Dynamic Taste Shifts</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A user's preferences change drastically over time (e.g., student vs working professional, holiday seasonal spikes). Models must incorporate temporal decay weighting.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 17: PRACTICAL LABS & ASSIGNMENTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 17
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Hands-on Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          17. Practical Hands-On Labs &amp; Capstone Exercises
        </h2>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Lab 1: Exploratory Interaction Matrix Analysis</span>
              <span className="text-xs font-mono text-orange-600 font-bold">Pandas &amp; SciPy</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Load the MovieLens 100K dataset, convert user-item records into a SciPy CSR sparse matrix, calculate overall sparsity percentage, plot the long-tail power law item interaction curve, and filter out low-activity users.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Lab 2: Content-Based Recommender with TF-IDF &amp; Cosine Metric</span>
              <span className="text-xs font-mono text-orange-600 font-bold">Scikit-Learn</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Extract multi-attribute metadata soups (genres, plot synopsis, cast), compute TF-IDF vector embeddings, and construct an interactive query engine returning top-10 similar titles with cosine affinity explanations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Lab 3: Funk SVD Matrix Factorization Engine</span>
              <span className="text-xs font-mono text-orange-600 font-bold">NumPy &amp; SGD</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Write a vectorized SGD optimizer in NumPy learning 20 latent factors with user/item bias terms. Plot the epoch-by-epoch training and validation RMSE curves to tune learning rate &gamma; and L2 penalty &lambda;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">Lab 4: Top-N Evaluation Harness (NDCG &amp; Precision@K)</span>
              <span className="text-xs font-mono text-orange-600 font-bold">Model Validation</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Implement a leave-one-out time-aware evaluation harness. For every user, hold out their most recent 5-star rating, rank it among 100 random unrated items, and compute HitRate@10 and NDCG@10.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 18: KNOWLEDGE CHECK & INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 18
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Interview Mastery
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          18. Machine Learning Engineer Interview Preparation
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q1: "Why would you choose Item-Based Collaborative Filtering over User-Based CF in production?"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> In enterprise platforms, user count typically exceeds item count by orders of magnitude (e.g., 200M users vs 20K movies). Computing user-user similarity is <em>O(M&sup2;)</em>, which is computationally prohibitive to maintain online. Furthermore, user tastes shift rapidly, whereas item characteristics remain stable over time, allowing item similarity matrices to be precomputed offline and cached for sub-millisecond retrieval.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q2: "Why can't you simply run classical mathematical SVD on a user-item rating matrix?"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> Classical SVD requires a completely dense matrix with no missing values. In real-world recommendation matrices, over 99% of entries are unobserved. Imputing unrated entries with zeros introduces massive noise (treating unviewed items as explicitly hated) and explodes computational cost. Simon Funk solved this by introducing regularized matrix factorization trained via SGD exclusively over observed entries.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q3: "Why is an outstanding RMSE score insufficient to guarantee high user satisfaction in practice?"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> RMSE measures error across all predictions, heavily penalizing deviations on mediocre items that users will never watch (e.g. predicting 2.0 instead of 2.8 on bad movies). Real users only interact with the top 5 to 10 recommendations on their screen. A model can achieve a stellar RMSE while completely failing to place the user's top favorite items in the visible top-5 slots. Hence, ranking metrics like NDCG@K and Precision@K are essential.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 19: IMPORTANT IMPLEMENTATION IMPROVEMENTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 19
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Production Scale
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          19. Production Optimizations: Vector Databases &amp; Two-Tower Embeddings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Vector Indexing (ANN)</span>
            <h3 className="font-bold text-stone-900 text-sm">FAISS &amp; HNSW</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Rather than linear brute-force dot products across 100M items, modern systems index item latent vectors into Hierarchical Navigable Small World (HNSW) graphs in FAISS or Milvus for sub-millisecond retrieval.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Two-Tower Deep Networks</span>
            <h3 className="font-bold text-stone-900 text-sm">Dual Neural Encoders</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A User Tower encodes dynamic user context into embedding <em>u&#8407;</em>, while an Item Tower encodes item features into <em>v&#8407;</em>. Dot products can be computed at serving time via vector database search.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Real-Time Event Streaming</span>
            <h3 className="font-bold text-stone-900 text-sm">Kafka &amp; Flink</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Streaming pipelines update a user's short-term session vector dynamically after every single video click, immediately reshaping downstream recommendations within 100ms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 20: MODULE SUMMARY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 20
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Synthesis &amp; Mastery
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          20. Module Summary &amp; Key Engineering Takeaways
        </h2>
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h3 className="font-bold text-stone-900 text-base">Core Concepts Mastered</h3>
          <ul className="text-xs sm:text-sm text-stone-700 space-y-2 list-disc list-inside leading-relaxed">
            <li><strong>Recommendation Taxonomy:</strong> Distinction between Content-Based, User-Based Collaborative Filtering, Item-Based Collaborative Filtering, and Hybrid Ensembles.</li>
            <li><strong>Matrix Factorization Foundations:</strong> Low-rank decomposition of sparse interaction matrices into latent user and item factor matrices via Simon Funk SVD with L2 regularization.</li>
            <li><strong>Baseline Bias Modeling:</strong> Decomposing predictions into global mean &mu;, user bias b<sub>u</sub>, and item bias b<sub>i</sub> to isolate genuine taste affinities.</li>
            <li><strong>Similarity Metrics:</strong> Proper application of Cosine, Pearson correlation, Adjusted Cosine, and Jaccard metrics for explicit vs implicit interactions.</li>
            <li><strong>Cold-Start Remedies:</strong> Combining content features, active onboarding exploration, and hybrid fallbacks for new users and items.</li>
            <li><strong>Ranking Quality vs Regression Error:</strong> Why production systems prioritize Top-N ranking metrics (NDCG@K, Precision@K) over classical RMSE.</li>
            <li><strong>Industrial Architecture:</strong> Multi-stage Candidate Generation (ANN/Two-Tower) &rarr; Heavy Deep Ranking &rarr; Business Logic Re-ranking.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
