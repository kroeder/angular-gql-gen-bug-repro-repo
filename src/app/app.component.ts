import { Component } from '@angular/core';
import gql from 'graphql-tag';

const outsideFragmentWorks = gql`
  fragment VoteFields on Vote {
    vote_value
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gql-gen-issue';

  thisFragmentWorks = outsideFragmentWorks;
  orThisOneAsWell = gql`
    ${outsideFragmentWorks}
  `;

  // > gql-gen
  //
  // √ Parse configuration
  // > Generate outputs
  // > Generate src/__generated/types.ts
  // √ Load GraphQL schemas
  // √ Load GraphQL documents
  // × Generate
  // → Found 2 errors in your documents
  //
  //
  //   We found 1 errors
  //
  //   Failed to generate src/__generated/types.ts
  //
  //   Found 2 errors.
  //   GraphQL Code Generator validated your GraphQL documents against the schema.
  //   Please fix following errors and run codegen again:
  //
  // ./src/app/app.component.ts:
  //   There can be only one fragment named "VoteFields".
  //
  // ./src/app/app.component.ts:
  //   There can be only one fragment named "VoteFields".
  thisFragmentDoesNotWork = gql`
    fragment VoteFields on Vote {
      vote_value
    }
  `;
}
