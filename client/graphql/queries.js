import gql from 'graphql-tag';

export const pageQuery = gql`
query pageQuery {
  universals{
    id
    Name
    slug
    PageBuilder {
      ... on ComponentSiteComponentsCta {
        CtaText
        TextColoured
        Buttons {
          ButtonURL
          ButtonText
        }
      }
      ... on ComponentSiteComponentsHero {
        MainTextLine1
        MainTextLine2
        HeroDescription
        HeroButton {
          ButtonURL
          ButtonText
        }
        HeroImage {
          id
          url
          alternativeText
        }
        
      }
      ... on ComponentSiteComponentsImageText {
        ImageTextImage {
          id
					alternativeText
          url
        }
        Subtext
        TitleText
        ImageTextDescription
        
        
      }
      ... on ComponentSiteComponentsParagraph {
        Text
        Quote
        QuoterName
        QuoterPosition
        
      }
      ... on ComponentSiteComponentsHeaderBanner {
        HeaderText
        Button {
          ButtonURL
          ButtonText
        }
        
      }
      ... on ComponentSiteComponentsFeatureSection {
        FeatureName
        FeatureSectionTitle
        FeatureSectionDescription
        FeatureSet {
          Benefit
          BenefitDescription
        }
        
      }
    }
  }
}`

export const singlePageQuery = gql`
query singlePageQuery($id: ID!) {
  universal(id: $id) {
    id
    Name
    slug
    PageBuilder {
      ... on ComponentSiteComponentsCta {
        CtaText
        TextColoured
        Buttons {
          ButtonURL
          ButtonText
        }
      }
      ... on ComponentSiteComponentsHero {
        MainTextLine1
        MainTextLine2
        HeroDescription
        HeroButton {
          ButtonURL
          ButtonText
        }
        HeroImage {
          id
          url
          alternativeText
        }
        
      }
      ... on ComponentSiteComponentsImageText {
        ImageTextImage {
          id
					alternativeText
          url
        }
        Subtext
        TitleText
        ImageTextDescription
        
        
      }
      ... on ComponentSiteComponentsParagraph {
        Text
        Quote
        QuoterName
        QuoterPosition
        
      }
      ... on ComponentSiteComponentsHeaderBanner {
        HeaderText
        Button {
          ButtonURL
          ButtonText
        }
        
      }
      ... on ComponentSiteComponentsFeatureSection {
        FeatureName
        FeatureSectionTitle
        FeatureSectionDescription
        FeatureSet {
          Benefit
          BenefitDescription
        }
        
      }
    }
  }
}`


export const navQuery = gql`
query navQuery {
  universals {
    id
    Name
    slug
  }
}`