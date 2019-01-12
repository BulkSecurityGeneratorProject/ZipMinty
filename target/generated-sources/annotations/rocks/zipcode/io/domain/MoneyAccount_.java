package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import rocks.zipcode.io.domain.enumeration.AccountType;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(MoneyAccount.class)
public abstract class MoneyAccount_ {

	public static volatile SingularAttribute<MoneyAccount, String> accountId;
	public static volatile SingularAttribute<MoneyAccount, Long> accountTotal;
	public static volatile SingularAttribute<MoneyAccount, String> description;
	public static volatile SingularAttribute<MoneyAccount, Long> id;
	public static volatile SingularAttribute<MoneyAccount, AccountType> type;
	public static volatile SetAttribute<MoneyAccount, Transaction> transactions;
	public static volatile SingularAttribute<MoneyAccount, UserDetails> userDetails;

}

