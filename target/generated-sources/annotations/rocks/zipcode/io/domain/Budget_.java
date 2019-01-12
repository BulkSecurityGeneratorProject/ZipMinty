package rocks.zipcode.io.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Budget.class)
public abstract class Budget_ {

	public static volatile SingularAttribute<Budget, Long> expectedTotal;
	public static volatile SingularAttribute<Budget, Long> actualTotal;
	public static volatile SingularAttribute<Budget, LocalDate> endDate;
	public static volatile SingularAttribute<Budget, Long> id;
	public static volatile SingularAttribute<Budget, UserDetails> userDetails;
	public static volatile SingularAttribute<Budget, LocalDate> startDate;
	public static volatile SetAttribute<Budget, BudgetItem> budgetItems;

}

